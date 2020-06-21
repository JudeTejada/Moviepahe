export const truncateText = (text) => {
  if (text.length > 20) {
    return `${text.slice(0, 30)}...`;
  }
  return text;
};
