import React, { useEffect } from "react";
import "./Search.scss";
import { getFetchData } from "@/global/util";
const Search = () => {
  const sample = async () => {
    const res = await getFetchData("https://dog.ceo/api/breeds/image/random", {
      method: "GET",
      headers: {},
    });
  };
  return <div>Search</div>;
};

export default Search;
