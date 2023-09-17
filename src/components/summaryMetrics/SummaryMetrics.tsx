//@ts-nocheck
"use client"; // NEXTJS client side component
import React from 'react';
import "./SummaryMetrics.scss";
import categories from "../../../resources/dummyData/composition.json";

// import graph
import ReBarChart from "../ReBarChart/ReBarChart";

// import interfaces
import { StrikeData } from "@/interfacess/interfaces";
import { StateType } from "@/reducer/reducer";
// Import the context hook
import { useAppContext } from "../../context/AppContext";

const SummaryMetrics = () => {
  // Access to initial state and reducer
  const { filteredData } = useAppContext();
  

  // COMPONENT UTILITY FUNCTIONS

  // calculate amount of strikes from dataset (length of JSON)
  const calculateAmountOfStrikes = (dataset: StateType[]): number => {
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

  function getCategoryByReoclass(variable: any) {
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

    });
    const result = Object.values(strikeCounts);
    return result;
  };
  interface YearRecClassCount {
    year: number;
    [recclass: string]: number | string;
  }

  interface RecClassColors {
    [recclass: string]: string;
  }

  // CONSTANTS for later rendering

  const averageMass = calculateAverageMass(filteredData);
  const amountOfStrikes = calculateAmountOfStrikes(filteredData);
  const rechartBarData = countStrikesByYearAndClass(filteredData);

  return (
    <div className="summaryContainer">
      <div className="metric-container">
        <p className="metric-title">
          Summary Total: {amountOfStrikes} Strikes{" "}
        </p>
        <p className="metric-title">
          {" "}
          Average Weight Of Meteor: {averageMass}g
        </p>
      </div>
      <div className="graph-container">
        <ReBarChart data={rechartBarData} />
      </div>
    </div>
  );
};

export default SummaryMetrics;
