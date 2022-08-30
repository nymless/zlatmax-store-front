export function shortenedArray<Type>(array?: Type[]) {
  if (!array) {
    return array;
  }
  let newArray = [];
  for (let i = 0; i < 10; i++) {
    if (!array[i]) {
      break;
    }
    newArray.push(array[i]);
  }
  return newArray;
}
