'use client'

import React, { useState } from "react";
import { useAppContext } from '../../context/AppContext';
import DataTable from 'react-data-table-component';
import "./DetailData.scss";

interface Meteor {
    name: string;
    id: string;
    nametype: string;
    recclass: string;
    mass: string;
    fall: string;
    year: string;
    reclat: string;
    reclong: string;
    geolocation: { 
      latitude: string; 
      longitude: string };
};  // Possibly a better way to do this??





const DetailData = () => {

const {state, filteredData} = useAppContext();

const mockSearchResult = state;

const columns = [
  {
      name: 'Name',
      selector: (row : Meteor) => row.name,
  },
  /* {
      name: 'id',
      selector: (row : Meteor) => row.id,
  }, */
  {
      name: 'Recclass',
      selector: (row : Meteor) => row.recclass,
  },
  {
      name: 'Mass (g)',
      selector: (row : Meteor) => row.mass,
  },
  {
      name: 'Year',
      selector: (row : Meteor) => row.year ? row.year.slice(0, 4) : 'No year',
  },
  /*{
      name: 'Latitude',
      selector: (row : Meteor) => row.reclat,
  },
  {
      name: 'Longitude',
      selector: (row : Meteor) => row.reclong,
  } */
];


const paginationComponentOptions = {
  noRowsPerPage: true
}
const customStyles = {
  rows: {
      style: {
          minHeight: '30px', 
      },
  },
  headCells: {
      style: {
          paddingLeft: '8px', 
          paddingRight: '8px',
          fontSize: '15px',
      },
  },
  cells: {
      style: {
          paddingLeft: '8px', 
          paddingRight: '8px',
      },
  },
};

  return (
    <>
      <div>DetailData</div>
      <div className='container'>
        <DataTable
          columns={columns}
          data={mockSearchResult}
          pagination
          paginationComponentOptions={paginationComponentOptions}
          customStyles={customStyles}
        />
      </div> 
    </>
  )
};

export default DetailData;

