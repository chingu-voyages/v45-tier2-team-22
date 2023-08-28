"use client";
import {
  createContext,
  useReducer,
  useContext,
  ReactNode,
  Dispatch,
  useState,
  SetStateAction,
  useEffect,
} from "react";
import reducer from "@/reducer/reducer";
import DUMMY_DATA from "../../public/meteors.json";

import { StateType, ActionType } from "@/reducer/reducer";

const initialState: StateType[] = DUMMY_DATA;
const initialFilteredData: StateType[] = [];

const DataContext = createContext<{
  state: StateType[];
  filteredData: StateType[];
  dispatch: Dispatch<ActionType>;
  setFilteredData: Dispatch<SetStateAction<StateType[]>>;
}>({
  state: initialState,
  dispatch: () => null,
  filteredData: initialFilteredData,
  setFilteredData: () => {},
});

const AppContext = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [filteredData, setFilteredData] = useState<StateType[]>([]);

  useEffect(() => {
    setFilteredData(state);
  }, [state]);

  return (
    <DataContext.Provider
      value={{ state, dispatch, filteredData, setFilteredData }}>
      {children}
    </DataContext.Provider>
  );
};

export function useAppContext() {
  const { state, dispatch, filteredData, setFilteredData } =
    useContext(DataContext);
  return { state, dispatch, filteredData, setFilteredData };
}

export default AppContext;
