import { getRandomInt } from '../../utils/getRandomInt';

export function generateBlade(bladeId, productPrice) {
  const maxPrice = productPrice / 4 - 100;

  const blade = {
    id: bladeId,
    bladeMaterialId: getRandomInt(1, 11),
    price: getRandomInt(100, maxPrice),
  };

  blades.push(blade);
}

export const blades = [];
