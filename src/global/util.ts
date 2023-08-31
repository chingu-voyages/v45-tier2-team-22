export const getFetchData = async (url: string, options?: {}) => {
  try {
    const response = options ? await fetch(url) : await fetch(url, options);
    return await response.json();
  } catch (e) {
    alert(e);
    console.error(e);
  }
};

// Converts strings to numbers if possible.
export const convertToNumber = (input: string): number | void => {
  const parsedNumber = parseFloat(input);

  if (isNaN(parsedNumber)) {
    return console.log(`${input} can't be converted to a number.`);
  }

  return parsedNumber;
};
