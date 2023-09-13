export const getFetchData = async (url: string, options?: {}) => {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (e) {
    alert(e);
    console.error(e);
  }
};

// Converts strings to numbers if possible.
export const convertToNumber = (input: string): number => {
  const parsedNumber = parseFloat(input);

  if (isNaN(parsedNumber)) {
    console.log(`${input} can't be converted to a number.`);
  }

  return parsedNumber;
};

// extracts year from dataset row
export const extractYearFromMeteoriteData = (dataset: StrikeData): number => {
  const yearString = dataset.year;
  const year = new Date(yearString).getFullYear();
  return year;
};

 // function returns the amount of strikes in each year
 export const countYearsInDataset = (
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
export const extractRecclassFromMeteoriteData = (data: StrikeData): string => {
  return data.recclass;
};


// function calculates composition count from dataset
 export const countRecclassesInDataset = (
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
  export const getUniqueRecclasses = (dataset: StrikeData[]): string[] => {
    const uniqueRecclasses: string[] = [];

    dataset.forEach((data) => {
      const recclass = data.recclass;

      if (!uniqueRecclasses.includes(recclass)) {
        uniqueRecclasses.push(recclass);
      }
    });

    return uniqueRecclasses;
  };