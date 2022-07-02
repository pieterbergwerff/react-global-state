// import libraries
import { StoreSchema } from "./StoreSchema";

// import helpers
import toCamelCase from "to-camel-case";

// import types
import { StoresType, StoreStateType, StoreNameType } from "../types";

export class StoresSchemaLibrary {
  private _stores: Array<StoreSchema> = [];
  private _inputStores: StoresType = {};

  constructor(stores: StoresType) {
    this._inputStores = stores;

    if (
      this.storeNames &&
      Array.isArray(this.storeNames) &&
      this.storeNames.length
    ) {
      for (let i = 0; i < this.storeNames.length; i++) {
        const storeName: StoreNameType = this.storeNames[i];
        const storeProps: StoreStateType | null = this.getStoreProps(storeName);
        if (
          storeName.trim() !== "" &&
          storeProps &&
          !this.getStore(storeName)
        ) {
          this._stores = [
            ...this._stores,
            new StoreSchema(storeName, storeProps)
          ];
        }
      }
    }
  }

  public getStore(storeName: StoreNameType): StoreSchema | null {
    const exists: boolean = this.storeNameExists(storeName) ? true : false;
    if (!exists) {
      return null;
    }
    const found: Array<StoreSchema> = this._stores.filter(
      (store: StoreSchema) => store.storeName === storeName
    );

    if (!found || !found.length) {
      return null;
    }
    return found[0];
  }

  public storeNameExists(storeName: StoreNameType): boolean {
    return this.storeNames.indexOf(toCamelCase(storeName)) > -1 ? true : false;
  }

  public getStoreProps(storeName: StoreNameType): StoreStateType | null {
    return this.storeNameExists(storeName)
      ? this._inputStores[storeName]
      : null;
  }

  public get storeNames(): Array<StoreNameType> {
    return (
      Object.keys(this._inputStores).map((storeName: string) =>
        toCamelCase(storeName)
      ) || []
    );
  }

  public get storesLength(): number {
    return this.storeNames.length;
  }
}
