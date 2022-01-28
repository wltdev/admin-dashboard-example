/* eslint-disable react/jsx-no-constructed-context-values */
import React, { ReactNode, useReducer, createContext, useContext } from "react";

const DEFAULT_VALUE = {
  userToken: "",
};

type State = typeof DEFAULT_VALUE;

type Action = {
  type: string;
  payload: string;
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "SET_TOKEN":
      return {
        ...state,
        userToken: action.payload,
      };
    case "RESET":
      return {
        userToken: "",
      };
    default:
      throw new Error();
  }
};

interface ContextType {
  state: {
    userToken: string;
  };
  dispatch: React.Dispatch<{ type: string; payload: string }>;
}

export const AppContext = createContext<ContextType | null>(null);

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, DEFAULT_VALUE);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);

  if (!context) throw new Error("Use AppContext is missing");

  return context;
};
