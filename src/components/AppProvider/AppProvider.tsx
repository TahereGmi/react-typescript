import React from "react";
import { AppState } from "types/app";
import { AppStateContext } from "./context";

export interface AppProviderProps {
  initialData?: AppState;
  children: React.ReactNode;
}

function AppProvider({
  initialData = [],
  children,
}: AppProviderProps) {

  return (
      <AppStateContext.Provider value={[]}>
        {children}
      </AppStateContext.Provider>
  );
}

export default AppProvider;
