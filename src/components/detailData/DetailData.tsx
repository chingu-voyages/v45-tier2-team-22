"use client";

import React from "react";
import { useAppContext } from "../../context/AppContext";
import { StateType } from "@/reducer/reducer";
import DataTable from "react-data-table-component";
import "./DetailData.scss";
import { StrikeData } from "@/interfacess/interfaces";

const testLocation = "Area 51, NV";

const DetailData = () => {
  const { state, filteredData } = useAppContext();


  const mockSearchResult = filteredData;

  const columns = [
    {
      name: "Name",
      selector: (row: StateType) => row.name,
    },
    {
      name: "Recclass",
      selector: (row: StateType) => row.recclass,
    },
    {
      name: "Mass (g)",
      selector: (row: StateType) => row.mass,
    },
    {
      name: "Year",
      selector: (row: StateType) =>
        row.year ? row.year.slice(0, 4) : "No year",
    },
    {
      name: "Location",
      selector: (row: StateType) => testLocation,
    },
  ];

  const paginationComponentOptions = {
    noRowsPerPage: true,
  };
  const customStyles = {
    rows: {
      style: {
        minHeight: "30px",
      },
    },
    headCells: {
      style: {
        paddingLeft: "8px",
        paddingRight: "8px",
        fontSize: "15px",
      },
    },
    cells: {
      style: {
        paddingLeft: "8px",
        paddingRight: "8px",
      },
    },
  };

  return (
    <div className="detailDataContainer">

      {
        mockSearchResult ? (
          <DataTable
            columns={columns}
            data={mockSearchResult}
            pagination
            paginationComponentOptions={paginationComponentOptions}
            customStyles={customStyles}
          />
          
        ) : (
          <p>Loading</p>
        )
      }
    </div>
  );
};

export default DetailData;
