import { getRandomInt } from '../../utils/getRandomInt';

export function generateHandle(handleId, productPrice) {
  const maxPrice = productPrice / 4 - 100;

  const handle = {
    id: handleId,
    handleMaterialId: getRandomInt(1, 11),
    price: getRandomInt(100, maxPrice),
  };

  handles.push(handle);
}

export const handles = [];
