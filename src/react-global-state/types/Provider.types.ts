// import types
import { ReactNode } from "react";
import { StoresType } from "./Store.types";

export interface ReactGlobalStateProviderPropTypes {
  children: ReactNode;
  stores: StoresType;
}
