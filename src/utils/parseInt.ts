export const parseInt = (arg: unknown) => {
  if (typeof arg !== 'string') {
    return NaN;
  }
  return Number.parseInt(arg);
};
