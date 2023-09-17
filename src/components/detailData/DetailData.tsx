// @ts-nocheck
"use client";

import { useAppContext } from "../../context/AppContext";
import { StateType } from "@/reducer/reducer";
import DataTable from "react-data-table-component";
import "./DetailData.scss";

const DetailData = () => {
  const { filteredData, currentTheme } = useAppContext();

  const mockSearchResult = filteredData;

  const theme = {
    font: currentTheme === "light" ? "#000d21" : "#eeeeee",
    backgroundColor: currentTheme === "light" ? "#dce5f3" : "#000d21",
    headerBackgroundColor: currentTheme === "light" ? "#dce5f3" : "#000d21",
  };

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
      selector: (row: StateType) => row.location
    },
    {
      name: "",
      width: '1px',
      compact: true,
      selector: (row: StateType) => {
        const headers = { "Authorization" : process.env.NEXT_PUBLIC_RADAR_KEY}
        const coords = row.reclat + ", " + row.reclong;
        const URL = "https://api.radar.io/v1/geocode/reverse?coordinates=" + coords + "&layers=state,country"

          fetch(URL, {headers})
          .then(response => response.json())
          .then(data => {
            row.location = data.addresses["0"].state + ", " + data.addresses["0"].country
          })
          .catch(error => {
            console.error("There was an error", error)
        })

      }
    }
  ];

  

  const paginationComponentOptions = {
    noRowsPerPage: true,
  };
  const customStyles = {
    rows: {
      style: {
        minHeight: "30px",
        backgroundColor: theme.backgroundColor,
      },
    },
    headCells: {
      style: {
        paddingLeft: "10px",
        paddingRight: "10px",
        fontSize: "16px",
        color: theme.font,
        backgroundColor: theme.headerBackgroundColor,
      },
    },
    cells: {
      style: {
        paddingLeft: "10px",
        paddingRight: "10px",
        paddingTop: "10px",
        paddingBottom: "10px",
        fontSize: "15px",
        color: theme.font,
      },
    },
  };

  return (
    <div className="detailDataContainer">
      {mockSearchResult ? (
        <DataTable
          columns={columns}
          data={mockSearchResult}
          pagination
          paginationComponentOptions={paginationComponentOptions}
          customStyles={customStyles}
        />
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};

export default DetailData;
