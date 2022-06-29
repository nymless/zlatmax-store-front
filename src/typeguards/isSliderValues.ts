type SliderValues = [number, number];

export function isSliderValues(object: unknown): object is SliderValues {
  if (!Array.isArray(object)) {
    return false;
  }

  if (object.length !== 2) {
    return false;
  }

  return typeof object[0] === 'number' && typeof object[1] === 'number';
}
