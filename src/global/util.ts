export const getFetchData = async (url: string, options?: {}) => {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (e) {
    alert(e);
    console.error(e);
  }
};
