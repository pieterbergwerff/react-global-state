export type StoreNameType = string;
export type StateNameType = string;
export type StateTypeType = "string" | "enum";

export interface StoreStatePropsType {
  type: StateTypeType;
}

export interface StoreStateType {
  [stateName: StateNameType]: StoreStatePropsType;
}

export interface StoresType {
  [storeName: StoreNameType]: StoreStateType;
}
