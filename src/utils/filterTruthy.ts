export const filterTruthy = (obj: object) => {
  const entries = Object.entries(obj).filter((entry) => Boolean(entry[1]));
  return Object.fromEntries(entries);
};
