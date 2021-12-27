import React from "react";
import { AppActionsContext } from "../AppProvider/context";

function useAppActions() {
  const context = React.useContext(AppActionsContext);
  if (context === undefined) {
    throw new Error("useAppActions must be used within the AppProvider");
  }
  return context;
}

export default useAppActions;
