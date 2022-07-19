import { getRandomInt } from '../../utils/getRandomInt';
import { generateBlade } from './blades';
import { generateHandle } from './handles';
import { generateHandguard } from './handguards';
import { generateGilding } from './gilding';
import { productModels } from './productModels';

let productCounter = 1;
let bladeCounter = 1;
let handleCounter = 1;
let handguardCounter = 1;
let gildingCounter = 1;

export function generateProduct(productModelId, withGilding) {
  const price = getRandomInt(1000, 10000);
  const productId = productCounter++;
  const bladeId = bladeCounter++;
  const handleId = handleCounter++;
  const handguardId = handguardCounter++;

  generateBlade(bladeId, price);
  generateHandle(handleId, price);
  generateHandguard(handguardId, price);

  let gildingId;
  if (withGilding) {
    gildingId = gildingCounter++;
    generateGilding(gildingId, price);
  }

  return {
    id: productId,
    productModelId,
    handleId: handleId,
    handguardId: handguardId,
    bladeId: bladeId,
    gildingId: withGilding ? gildingId : null,
    img: 'model.jpg',
    price: price,
    stock: getRandomInt(0, 10),
    code: 'AF000000' + productId,
  };
}

export const products = [];
