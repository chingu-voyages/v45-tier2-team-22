//@ts-nocheck
"use client"; // NEXTJS client side component
import React from "react";
import "./SummaryMetrics.scss";
// import strikes from '../../../resources/meteors.json';
import categories from "../../../resources/dummyData/composition.json";

// import graph
import ReBarChart from "../ReBarChart/ReBarChart";

// import StrikeData interface 

import { StrikeData } from "@/interfacess/interfaces";
// Import the context hook
import { useAppContext } from "../../context/AppContext";

// Shape of Api dataset
// interface StrikeData {
//   name: string;
//   id: string;
//   nametype: string;
//   recclass: string;
//   mass: string;
//   fall: string;
//   year: string;
//   reclat: string;
//   reclong: string;
//   geolocation: {
//     latitude: string;
//     longitude: string;
//   };
// }

const SummaryMetrics = () => {
  // Access to initial state and reducer
  const { state, filteredData, dispatch } = useAppContext();

  // COMPONENT UTILITY FUNCTIONS

  // calculate amount of strikes from dataset (length of JSON)
  const calculateAmountOfStrikes = (dataset: StrikeData[]): number => {
    if (dataset == null){
      return;
    }
    let totalStrikes: number = Object.keys(dataset).length;
    return totalStrikes;
  };

  // calculate avg mass of strikes
  const calculateAverageMass = (dataset: StrikeData[]): number => {
    if (dataset == null){
      return;
    }
    const totalMass = dataset.reduce((sum, object) => {
      const mass = parseFloat(object.mass);
      return isNaN(mass) ? sum : sum + mass;
    }, 0);

    const averageMass: number = totalMass / dataset.length;

    // Round to the nearest kilogram
    const roundedAverageMass: number = Math.round(averageMass);

    return roundedAverageMass;
  };

  // extracts year from dataset row
  const extractYearFromMeteoriteData = (dataset: StrikeData): number => {
    const yearString = dataset.year;
    const year = new Date(yearString).getFullYear();
    return year;
  };

  // Shape of each strike
  interface StrikeCounts {
    year: string;
    [recclass: string]: string | number;
    totalStrikes: number;
    stony: number;
    martian: number;
    iron_nickel: number;
    iron_stone: number;
    unknown: number;
  }

  function getCategoryByReoclass(variable) {
    const foundItem = categories.find((item) => item.reoclass === variable);
    return foundItem ? foundItem.category : undefined;
  }

  const countStrikesByYearAndClass = (
    dataset: StrikeData[]
  ): StrikeCounts[] => {
    const strikeCounts: { [year: string]: StrikeCounts } = {};

    dataset.forEach((data) => {
      const year = new Date(data.year).getFullYear();
      const recclass = data.recclass;

      if (!strikeCounts[year]) {
        strikeCounts[year] = {
          year,
          [recclass]: 1,
          totalStrikes: 1,
          stony: 0,
          martian: 0,
          iron_nickel: 0,
          iron_stone: 0,
          unknown: 0,
        };
      } else {
        strikeCounts[year][recclass] = (strikeCounts[year][recclass] || 0) + 1;
        strikeCounts[year].totalStrikes += 1;
      }

      const strikeCategory = getCategoryByReoclass(recclass);

      switch (strikeCategory) {
        case "stony":
          strikeCounts[year].stony += 1;
          break;
        case "iron / stone":
          strikeCounts[year].iron_stone += 1;
          break;
        case "iron/nickel":
          strikeCounts[year].iron_nickel += 1;
          break;
        case "martian":
          strikeCounts[year].martian += 1;
          break;
        default:
          strikeCounts[year].unknown += 1;
          break;
      }

      const result = Object.values(strikeCounts);
      return result;
    });
  };

  const rechartBarData = countStrikesByYearAndClass(filteredData);

  // interface DataPoint {
  //   year: string;
  //   recclass: string;
  // }

  interface YearRecClassCount {
    year: number;
    [recclass: string]: number | string;
  }

  interface RecClassColors {
    [recclass: string]: string;
  }

  // const generateYearRecClassData = (dataset: DataPoint[]): YearRecClassCount[] => {
  //   const yearRecClassCounts: Record<number, YearRecClassCount> = {};
  //   const recclassColors: RecClassColors = {};
  //   const uniqueRecClasses: string[] = [];

  //   // Count occurrences of each year and recclass
  //   dataset.forEach((data) => {
  //       const year = new Date(data.year).getFullYear();
  //       const recclass = data.recclass;
  //       const recclassColor = recclassColors[recclass] || `hsl(${Math.random() * 360}, 70%, 50%)`;

  //       if (!yearRecClassCounts[year]) {
  //           yearRecClassCounts[year] = {
  //               year,
  //               [recclass]: 1,
  //               [`${recclass}Color`]: recclassColor,
  //           };
  //       } else {
  //           yearRecClassCounts[year][recclass] = (yearRecClassCounts[year][recclass] || 0) + 1;
  //       }

  //       if (!uniqueRecClasses.includes(recclass)) {
  //           uniqueRecClasses.push(recclass);
  //       }
  //   });

  //   // Convert yearRecClassCounts object to an array of objects
  //   const result = Object.values(yearRecClassCounts);
  //   // console.log('barchart', result);

  //   // console.log(uniqueRecClasses, 'reoclass');

  //   return result;
  // };

  // generateYearRecClassData(state);

  // function returns the amount of strikes in each year
  const countYearsInDataset = (
    dataset: StrikeData[]
  ): Record<number, number> => {
    const yearCounts: Record<number, number> = {};

    dataset.forEach((data) => {
      const year = extractYearFromMeteoriteData(data);
      if (yearCounts[year]) {
        yearCounts[year]++;
      } else {
        yearCounts[year] = 1;
      }
    });

    return yearCounts;
  };

  // Short function extracts recclass from dataset row
  const extractRecclassFromMeteoriteData = (data: StrikeData): string => {
    return data.recclass;
  };

  // function calculates composition count from dataset
  const countRecclassesInDataset = (
    dataset: StrikeData[]
  ): Record<string, number> => {
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
  };

  // Creates an array of unique string recclass
  // Does not need to be run on each new dataset
  const getUniqueRecclasses = (dataset: StrikeData[]): string[] => {
    const uniqueRecclasses: string[] = [];

    dataset.forEach((data) => {
      const recclass = data.recclass;

      if (!uniqueRecclasses.includes(recclass)) {
        uniqueRecclasses.push(recclass);
      }
    });

    return uniqueRecclasses;
  };

  // CONSTANTS for later rendering

  const averageMass = calculateAverageMass(filteredData);
  const amountOfStrikes = calculateAmountOfStrikes(filteredData);

  // const recclassObjects = strikeComposition.map((recclass) => {
  //   return {
  //       reoclass: recclass,
  //       category: 'stony',
  //   };
  // });

  //////////////////////////////////////////////
  // CONSOLE LOG STATEMENTS FOR TESTING PURPOSES
  //////////////////////////////////////////////

  // const strikeComposition = getUniqueRecclasses(state)
  // const recclassCounts = countRecclassesInDataset(state);
  // const yearCounts = countYearsInDataset(state);
  // const compositionLength = Object.keys(recclassCounts).length
  // const yearsCountLength = Object.keys(yearCounts).length

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
    <div className="summaryContainer">
      <div className="metric-container">
        <p className="metric-title">
          Summary Total: {amountOfStrikes} Strikes{" "}
        </p>
        <p className="metric-title">
          {" "}
          Average Weight Of Meteor: {averageMass}kg
        </p>
      </div>
      <div className="graph-container">
        <ReBarChart data={rechartBarData} />
      </div>
    </div>
  );
};

export default SummaryMetrics;
