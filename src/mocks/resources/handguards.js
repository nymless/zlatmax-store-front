import { getRandomInt } from '../../utils/getRandomInt';

export function generateHandguard(handguardId, productPrice) {
  const maxPrice = productPrice / 4 - 100;

  const handguard = {
    id: handguardId,
    handguardMaterialId: getRandomInt(1, 10),
    price: getRandomInt(100, maxPrice),
  };

  handguards.push(handguard);
}

export const handguards = [];
