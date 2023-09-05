"use client";

import React, { useEffect, useState } from "react";
import "./Search.scss";
import { getFetchData } from "@/global/util";
import { BiSearch } from "react-icons/bi";
import { MdClear } from "react-icons/md";
import { useAppContext } from "@/context/AppContext";
import { StateType } from "@/reducer/reducer";

const Search = () => {
  const [meteoriteName, setMeteoriteName] = useState<string>("");
  const [meteoriteComposiiton, setMeteoriteComposiiton] = useState<string>("");
  const [yearOfStrike, setYearOfStrike] = useState<string>("");
  const [massRangeMin, setMassRangeMin] = useState<string>("");
  const [massRangeMax, setMassRangeMax] = useState<string>("");

  const yearArray = () => {
    const thisYear = new Date().getFullYear();
    let targetYear = thisYear;
    let targetYearArray: string[] = [];
    for (let i = 0; i < 50; i++) {
      targetYearArray.push(targetYear.toString());
      targetYear--;
    }
    return targetYearArray;
  };

  const { state, filteredData, setFilteredData } = useAppContext();

  const searchArray = [
    {
      type: "text",
      name: "name",
      id: "name",
      placeholder: "Name",
      value: meteoriteName,
      onChange: (e: React.FormEvent<HTMLInputElement | HTMLSelectElement>) =>
        setMeteoriteName(e.currentTarget.value),
    },
    {
      type: "text",
      name: "meteoriteComposiiton",
      id: "meteoriteComposiiton",
      placeholder: "Meteorite composition",
      value: meteoriteComposiiton,
      onChange: (e: React.FormEvent<HTMLInputElement | HTMLSelectElement>) =>
        setMeteoriteComposiiton(e.currentTarget.value),
    },
    {
      type: "select",
      name: "yearOfStrike",
      id: "yearOfStrike",
      placeholder: "Year of strike",
      options: yearArray(),
      value: yearOfStrike,
      onChange: (e: React.FormEvent<HTMLInputElement | HTMLSelectElement>) =>
        setYearOfStrike(e.currentTarget.value),
    },
    {
      type: "text",
      name: "massRangeMin",
      id: "massRangeMin",
      placeholder: "Mass range (min)",
      value: massRangeMin,
      onChange: (e: React.FormEvent<HTMLInputElement | HTMLSelectElement>) =>
        setMassRangeMin(e.currentTarget.value),
    },
    {
      type: "text",
      name: "massRangeMax",
      id: "massRangeMax",
      placeholder: "Mass range (max)",
      value: massRangeMax,
      onChange: (e: React.FormEvent<HTMLInputElement | HTMLSelectElement>) =>
        setMassRangeMax(e.currentTarget.value),
    },
  ];

  const clearAllSearch = () => {
    setMeteoriteName("");
    setMeteoriteComposiiton("");
    setYearOfStrike("");
    setMassRangeMin("");
    setMassRangeMax("");
  };

  const searchHandler = () => {
    let targetArray = state.filter((s: StateType) => {
      return meteoriteName
        ? s.name.toLowerCase().includes(meteoriteName.toLowerCase())
        : true;
    });
    targetArray = targetArray.filter((s: StateType) => {
      return meteoriteComposiiton && s.recclass
        ? s.recclass.toLowerCase()?.includes(meteoriteComposiiton.toLowerCase())
        : true;
    });
    targetArray = targetArray.filter((s: StateType) => {
      return yearOfStrike && s.year
        ? s.year.slice(0, s.year.indexOf("-")) === yearOfStrike
        : true;
    });
    targetArray = targetArray.filter((s: StateType) => {
      return massRangeMin && Number(s.mass)
        ? Number(s.mass) >= Number(massRangeMin)
        : true;
    });
    targetArray = targetArray.filter((s: StateType) => {
      return massRangeMax && Number(s.mass)
        ? Number(s.mass) <= Number(massRangeMax)
        : true;
    });

    setFilteredData(targetArray);
  };

  return (
    <div className="search_comp">
      <div className="search_wrapper">
        {searchArray.map((search) =>
          search.type === "text" ? (
            <div className="input_wrapper" key={search.id}>
              <BiSearch />
              <input
                className="search_input"
                type="text"
                name={search.name}
                id={search.id}
                value={search.value}
                onChange={(e: React.FormEvent<HTMLInputElement>) =>
                  search.onChange(e)
                }
                placeholder={search.placeholder}
              />
            </div>
          ) : (
            <div className="select_wrapper" key={search.id}>
              <BiSearch />
              <select
                className="search_select"
                value={search.value}
                placeholder={search.placeholder}
                onChange={(e: React.FormEvent<HTMLSelectElement>) =>
                  search.onChange(e)
                }>
                <option
                  className="option_default_text"
                  value=""
                  disabled
                  hidden>
                  Year of strike
                </option>
                {search.options?.map((opt) => (
                  <option key={opt}>{opt}</option>
                ))}
              </select>
            </div>
          )
        )}
        <button className="clear_button" onClick={() => clearAllSearch()}>
          <div>
            <MdClear size="1rem" />
            Clear All
          </div>
        </button>
        <button className="search_button" onClick={() => searchHandler()}>
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
