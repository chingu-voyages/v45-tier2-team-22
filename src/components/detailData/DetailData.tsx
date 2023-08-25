'use client'

import React from "react";
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
      name: 'Mass',
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


const DetailData = () => {

const {state, dispatch} = useAppContext();

const mockSearchResult = state.slice(400,449)

  return (
    <>
      <div>DetailData</div>
      <DataTable
          columns={columns}
          data={mockSearchResult}
          pagination
      />
    </>
  )
};

export default DetailData;

