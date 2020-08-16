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

export const numberWithCommas = (x) => {
  return x ? x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : 0;
};

export const toHrsMins = (mins) => {
  let h = Math.floor(mins / 60);
  let m = mins % 60;
  h = h < 10 ? `0${h}` : h;
  m = m < 10 ? `0${m}` : m;
  return `${h}hr ${m}min`;
};

export const isEmpty = (obj) => {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
};
