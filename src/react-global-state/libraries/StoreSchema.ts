// import helpers
import toCamelCase from "to-camel-case";

// import types
import { StoreStateType, StoreNameType } from "../types";

export class StoreSchema {
  private _storeName: StoreNameType;
  private _inputStoreProps: StoreStateType;

  constructor(storeName: StoreNameType, storeProps: StoreStateType) {
    this._storeName = toCamelCase(storeName.trim());
    this._inputStoreProps = storeProps;
  }

  public get storeName(): StoreNameType {
    return this._storeName;
  }
}
