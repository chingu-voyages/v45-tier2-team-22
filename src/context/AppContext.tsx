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

import { StrikeData } from "@/interfacess/interfaces";

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
  dispatch: Dispatch<ActionType>;
  setFilteredData: Dispatch<SetStateAction<StrikeData[]>>;
}>({
  state: initialState,
  dispatch: () => null,
  filteredData: initialFilteredData,
  setFilteredData: () => {},
});

const AppContext = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [filteredData, setFilteredData] = useState<StrikeData[]>([]);

  useEffect(() => {
    fetchData(MeteorStrikeAPI)
      .then(data => {
        // not sure yet how to add the data type, StrikeData to the fetch data
        setFilteredData(data);
      })
      .catch(error => {
        console.error('Error', error)
      })
  }, []);

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
