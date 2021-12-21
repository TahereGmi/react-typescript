import React from "react";
import { AppActions, AppState } from "types/app";

export const AppStateContext = React.createContext<AppState | undefined>(
  undefined
);

export const AppActionsContext = React.createContext<AppActions | undefined>(
  undefined
);

