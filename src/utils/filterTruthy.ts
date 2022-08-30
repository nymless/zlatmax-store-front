export const filterTruthy = (obj: Record<string, any>) => {
  const entries = Object.entries(obj).filter((entry) => {
    return Boolean(entry[1]);
  });
  return Object.fromEntries(entries);
};
