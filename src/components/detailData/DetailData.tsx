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

const pageNumber = 0;
const pageSize = 10;
const [page, setPage] = useState( () => pageNumber )

const mockSearchResult = state;

let searchResult = mockSearchResult.map(({geolocation, fall, reclat, reclong, id, nametype, ...rest}) => {
  return rest;
})

for (const item of searchResult) {
  if (item.year) {
    item.year = item.year.slice(0, 4);
  }
}

const handlePrevious = () => {
  setPage(page => page - 1)
}

const handleNext = () => {
  setPage(page => page + 1)
}

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


// const paginationComponentOptions = {
//   noRowsPerPage: true
// }
// const customStyles = {
//   rows: {
//       style: {
//           minHeight: '30px', 
//       },
//   },
//   headCells: {
//       style: {
//           paddingLeft: '8px', 
//           paddingRight: '8px',
//           fontSize: '15px',
//       },
//   },
//   cells: {
//       style: {
//           paddingLeft: '8px', 
//           paddingRight: '8px',
//       },
//   },
// };

  return (
    <>
      {/* <div>DetailData</div> */}
      <div className='container'>
        {searchResult.length > 0  && (
          <div>
          <table className='dataTable'>
            <thead className='tHead'>
              <tr className='tableHeader'>
                {columns.map((item, index)=> (
                  <th 
                  className='columnHeading'
                  key={index}>
                    {item.name}
                  </th>
                )
                )}
              </tr>
            </thead>
            <tbody>
              {Object.values(searchResult.slice(pageSize * pageNumber, (pageSize * pageNumber) + pageSize)).map((item, index) => (
                <tr key={index} className='tableRow'>
                  {Object.values(item).map((value, token) => (
                    <td key={token} className='tableRow'>
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <div className='pagination'>
                <button id='btn-previous' onClick={handlePrevious}>Previous</button>
               
                <button className='num-buttons' id='active'>{pageNumber + 1}</button>
               
                <button id='btn-next' onClick={handleNext}>Next</button>
              </div>
              </div>
        )}









        {/* <DataTable
          columns={columns}
          data={mockSearchResult}
          pagination
          paginationComponentOptions={paginationComponentOptions}
          customStyles={customStyles}
        /> */}
      </div> 
    </>
  )
};

export default DetailData;

