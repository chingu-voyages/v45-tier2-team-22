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

import { StateType, ActionType } from "@/reducer/reducer";

// removed DUMMYData
const initialState: StateType[] = [];
const initialFilteredData: StateType[] = [];

// API URL Target
const MeteorStrikeAPI = 'https://data.nasa.gov/resource/gh4g-9sfh.json';

function fetchData<T>(url: string): Promise<T> {
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
      }
      return response.json() as Promise<T>;
    })
    .catch(error => {
      console.error('Fetch error:', error);
      throw error;
    });
}

const DataContext = createContext<{
  state: StateType[];
  filteredData: StateType[];
  setFilteredData: Dispatch<SetStateAction<StateType[]>>;
}>({
  state: initialState,
  filteredData: initialFilteredData,
  setFilteredData: () => {},
});

const AppContext = ({ children }: { children: ReactNode }) => {
  // refactored to use a useState since we're not using any dispatches yet
  // const [state, dispatch] = useReducer(reducer, initialState);
  const [state, setState] = useState<StateType[]>([]);
  const [filteredData, setFilteredData] = useState<StateType[]>([]);

  useEffect(() => {
    fetchData(MeteorStrikeAPI)
      .then(data => {
        // not sure yet how to add the data type, StrikeData to the fetch data
        setState(data)
        setFilteredData(data);
      })
      .catch(error => {
        console.error('Error', error)
      })
  }, []);

  return (
    <DataContext.Provider
      value={{ state, filteredData, setFilteredData }}>
      {children}
    </DataContext.Provider>
  );
};

export function useAppContext() {
  const { state, filteredData, setFilteredData } =
    useContext(DataContext);
  return { state, filteredData, setFilteredData };
}

export default AppContext;
