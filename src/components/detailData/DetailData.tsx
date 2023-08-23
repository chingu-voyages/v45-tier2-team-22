'use client'

import React from "react";
import DataTable from 'react-data-table-component';
import "./DetailData.scss";
import Meteors from "/public/meteors.json"

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
};

let meteorData = Meteors;
const meteorTen = meteorData.slice(0,99)
console.log(meteorTen)

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
  {
      name: 'Latitude',
      selector: (row : Meteor) => row.reclat,
  },
  {
      name: 'Longitude',
      selector: (row : Meteor) => row.reclong,
  }  
];


const Table = () => {
  return (
      <DataTable
          columns={columns}
          data={meteorTen}
          pagination
      />
  );
};

const DetailData = () => {
  return (
    <>
      <div>DetailData</div>
      <Table/>
    </>
  )
};

export default DetailData;

