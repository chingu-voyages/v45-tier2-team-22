"use client";

import React, { useEffect } from "react";
import "./Search.scss";
import { getFetchData } from "@/global/util";
const Search = () => {
  // const sample = async () => {
  const searchArray = [
    {
      type: "text",
      name: "name",
      id: "name",
      labelText: "Name",
      placeholder: "Hoba",
    },
    {
      type: "text",
      name: "meteoriteComposiiton",
      id: "meteoriteComposiiton",
      labelText: "Meteorite composition",
      placeholder: "Iron",
    },
    {
      type: "select",
      name: "yearOfStrike",
      id: "yearOfStrike",
      labelText: "Year of strike",
      placeholder: "2022",
    },
    {
      type: "text",
      name: "massRange_more",
      id: "massRange_more",
      labelText: "Mass range (more than)",
      placeholder: "100",
    },
    {
      type: "text",
      name: "massRange_less",
      id: "massRange_less",
      labelText: "Mass range (less than)",
      placeholder: "10000",
    },
  ];
  return (
    <div className="search_comp">
      <div className="search_wrapper">
        <form>
          <div>
            {searchArray.map((search) =>
              search.type === "text" ? (
                <input
                  type="text"
                  name={search.name}
                  id={search.id}
                  placeholder={search.placeholder}
                />
              ) : (
                <select name="pets" id="pet-select">
                  <option value="dog">Dog</option>
                  <option value="hamster">Hamster</option>
                </select>
              )
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;
