//@ts-nocheck
'use client' // NEXTJS client side component
import React from "react";
import "./SummaryMetrics.scss";
import strikes from '../../../resources/meteors.json';

const SummaryMetrics = () => {

  // calculate amount of strikes from dataset (length of JSON)
  const calculateAmountOfStrikes = (dataset) => {
    let totalStrikes = Object.keys(dataset).length;
    return totalStrikes
  }

  // calculate avg mass of strikes 

  const averageMass = (dataset) => {
  
    const totalMass = dataset.reduce((sum, object) => {
      const mass = parseFloat(object.mass);
      // console.log(`Adding mass: ${mass}`);
      // console.log(`Sum: ${sum}`);
      return isNaN(mass) ? sum : sum + mass;
    }, 0);
    
    let averageMass = totalMass / calculateAmountOfStrikes(dataset)

    return parseInt(averageMass);
  }

// extracts year from dataset row
  function extractYearFromMeteoriteData(data) {
    const yearString = data.year;
    const year = new Date(yearString).getFullYear();
    return year;
  }
  
  const extractedYear = extractYearFromMeteoriteData(strikes[5]);
  console.log(`Extracted Year: ${extractedYear}`);


  // function returns the amount of times in each year 
  function countYearsInDataset(dataset) {
    const yearCounts = {};
    
    dataset.forEach((data) => {
      const year = extractYearFromMeteoriteData(data);
      if (yearCounts[year]) {
        yearCounts[year]++;
      } else {
        yearCounts[year] = 1;
      }
    });
    
    console.log(yearCounts)
    return yearCounts;
  }
  

  

  function extractRecclassFromMeteoriteData(data) {
    return data.recclass;
  }

  // function calculates composition count from dataset
  function countRecclassesInDataset(dataset) {
    const recclassCounts = {};
    
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
  
  const amountOfStrikes = calculateAmountOfStrikes(strikes)
  const recclassCounts = countRecclassesInDataset(strikes);
  const compositionLength = Object.keys(recclassCounts).length
  const yearCounts = countYearsInDataset(strikes);
  const yearsCountLength = Object.keys(yearCounts).length

  
  // console.log("Recclass Counts:");
  // for (const recclass in recclassCounts) {
  //   console.log(`${recclass}: ${recclassCounts[recclass]}`);
  // }

  // console.log("Year Counts:");
  // for (const year in yearCounts) {
  //   console.log(`${year}: ${yearCounts[year]}`);
  // }

  // create histogram of strikes per year

  // create histogram of strikes by composition
  
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
