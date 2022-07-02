// import packages
import { FC, ReactElement } from "react";

// import context
import { GlobalContext } from "../context";

// import hooks
import { useGlobalState } from "../hooks";

// import types
import {
  ReactGlobalStateProviderPropTypes,
  UseGlobalStateReturnTypes
} from "../types";

/**
 * Render a react-global-state context provider
 * @param children any
 */
export const ReactGlobalStateProvider: FC<ReactGlobalStateProviderPropTypes> = ({
  children = null,
  stores = {}
}): ReactElement | null => {
  const providerValue: UseGlobalStateReturnTypes = useGlobalState(stores);

  if (!children) {
    return null;
  }

  return (
    <GlobalContext.Provider value={providerValue}>
      {children}
    </GlobalContext.Provider>
  );
};
