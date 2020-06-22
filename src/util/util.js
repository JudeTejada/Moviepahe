export const truncateText = (text) => {
  if (text.length > 20) {
    return `${text.slice(0, 30)}...`;
  }
  return text;
};

// Function to get the year only from the date
export const splitYear = (date) => {
  const [year] = date.split("-");
  return year;
};
