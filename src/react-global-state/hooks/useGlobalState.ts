// import hooks
import { useMemo } from "react";

// import libraries
import { StoresSchemaLibrary as StoresSchema } from "../libraries";

// import types
import { StoresType, UseGlobalStateReturnTypes } from "../types";

export const useGlobalState = (
  stores: StoresType
): UseGlobalStateReturnTypes => {
  const schema: StoresSchema = useMemo(() => new StoresSchema(stores), [
    stores
  ]);

  console.log(schema);

  return {};
};
