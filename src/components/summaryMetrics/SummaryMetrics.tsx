'use client' // NEXTJS client side component
import React from "react";
import "./SummaryMetrics.scss";
import strikes from '../../../resources/meteors.json';

// Import the context hook
import {useAppContext} from '../../context/AppContext';

interface StrikeData {
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
      longitude: string;
  };
}

const SummaryMetrics = () => {

  // Access to initial state and reducer
  const {state, dispatch} = useAppContext();

  console.log(state)

  // calculate amount of strikes from dataset (length of JSON)
  const calculateAmountOfStrikes = (dataset: StrikeData[]): number => {
    let totalStrikes: number = Object.keys(dataset).length;
    return totalStrikes;
}

  // calculate avg mass of strikes 

  const averageMass = (dataset: StrikeData[]): number => {
    const totalMass = dataset.reduce((sum, object) => {
        const mass = parseFloat(object.mass);
        return isNaN(mass) ? sum : sum + mass;
    }, 0);

    const averageMass: number = totalMass / dataset.length;

    return (averageMass);
}

// extracts year from dataset row
const extractYearFromMeteoriteData = (dataset: StrikeData): number => {
  const yearString = dataset.year;
  const year = new Date(yearString).getFullYear();
  return year;
}
  
  
  // function returns the amount of times in each year 
  const countYearsInDataset = (dataset: StrikeData[]): Record<number, number> => {
    const yearCounts: Record<number, number> = {};
    
    dataset.forEach((data) => {
        const year = extractYearFromMeteoriteData(data);
        if (yearCounts[year]) {
            yearCounts[year]++;
        } else {
            yearCounts[year] = 1;
        }
    });
    
    console.log(yearCounts);
    return yearCounts;
}
  

const extractRecclassFromMeteoriteData = (data: StrikeData): string => {
  return data.recclass;}

  // function calculates composition count from dataset
  const countRecclassesInDataset = (dataset: StrikeData[]): Record<string, number> => {
    const recclassCounts: Record<string, number> = {};
    
    dataset.forEach((data) => {
        const recclass = extractRecclassFromMeteoriteData(data);
        if (recclassCounts[recclass]) {
            recclassCounts[recclass]++;
        } else {
            recclassCounts[recclass] = 1;
        }
    });
    
    return recclassCounts;
}

// CONSTANTS for later rendering

  const amountOfStrikes = calculateAmountOfStrikes(state)
  const recclassCounts = countRecclassesInDataset(state);
  const compositionLength = Object.keys(recclassCounts).length
  const yearCounts = countYearsInDataset(state);
  const yearsCountLength = Object.keys(yearCounts).length

  // create histogram of strikes per year

  // create histogram of strikes by composition


  // CONSOLE LOG STATEMENTS FOR TESTING PURPOSES

  // const extractedYear = extractYearFromMeteoriteData(strikes[5]);
  // console.log(`Extracted Year: ${extractedYear}`);
  
  // console.log("Recclass Counts:");
  // for (const recclass in recclassCounts) {
  //   console.log(`${recclass}: ${recclassCounts[recclass]}`);
  // }

  // console.log("Year Counts:");
  // for (const year in yearCounts) {
  //   console.log(`${year}: ${yearCounts[year]}`);
  // }


  
  return (

  <div className="container">
    <div className="metric">
      <p className="metric-title">Total Number of Strikes</p>
      {amountOfStrikes}
    </div>
    <div className="metric">
    <p className="metric-title">Average Mass</p>
      {averageMass(strikes)}
    </div>
    <div className="metric">
    <p className="metric-title">Number of strikes by year</p>
      {amountOfStrikes} strikes between 861 and 2013
    </div>
    <div className="metric">
    <p className="metric-title">Strikes by composition</p>
      {compositionLength} different compositions 
    </div>
  </div>
  )
};

export default SummaryMetrics;
