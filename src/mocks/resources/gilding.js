import { getRandomInt } from '../../utils/getRandomInt';

export const gilding = [];

export function generateGilding(gildingId, productPrice) {
  const maxPrice = productPrice / 4 - 100;

  const gildingItem = {
    id: gildingId,
    gildingTypeId: getRandomInt(1, 3),
    price: getRandomInt(100, maxPrice),
  };

  gilding.push(gildingItem);
}
