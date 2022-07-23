/**
 * Get random integer. Max is not included. Exclude number array.
 */
export function getRandomIntExcluded(
  min: number,
  max: number,
  excluded: number[]
) {
  min = Math.ceil(min);
  max = Math.floor(max);
  let random = Math.floor(Math.random() * (max - min)) + min;
  excluded.forEach((n) => {
    if (random >= n) {
      random += 1;
    }
  });
  if (random >= max) {
    random = max - 1;
  }
  return random;
}
