"use client";
import {
  createContext,
  useReducer,
  useContext,
  ReactNode,
  Dispatch,
} from "react";
import reducer from "@/reducer/reducer";
import DUMMY_DATA from "../../public/meteors.json";

import { StateType, ActionType } from "@/reducer/reducer";

const initialState: StateType[] = DUMMY_DATA;

const DataContext = createContext<{
  state: StateType[];
  dispatch: Dispatch<ActionType>;
}>({ state: initialState, dispatch: () => null });

const AppContext = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export function useAppContext() {
  const { state, dispatch } = useContext(DataContext);
  return { state, dispatch };
}

export default AppContext;
