import { getRandomInt } from '../../utils/getRandomInt';
import { generateProduct, products } from './products';
import { gallery, generateGallery } from './gallery';
import { generateInfo, info } from './info';

let counter = 1;

function generateProductModel(typeId, seriesId) {
  const productModelId = counter++;
  const isProductWithGilding = Boolean(getRandomInt(0, 2));

  const productsCount = getRandomInt(1, 6);
  for (let i = 1; i <= productsCount; i++) {
    products.push(generateProduct(productModelId, isProductWithGilding));
  }

  gallery.push(...generateGallery(productModelId));
  info.push(generateInfo(productModelId));

  return {
    id: productModelId,
    typeId,
    categoryId: getRandomInt(1, 10),
    brandId: getRandomInt(1, 11),
    seriesId,
    name: 'Нож модели ' + productModelId,
    rating: 0,
    totalLength: getRandomInt(200, 250),
    bladeLength: getRandomInt(100, 150),
    bladeWidth: getRandomInt(20, 30),
  };
}

export const productModels = [];

for (let i = 0; i < 1000; i++) {
  productModels.push(generateProductModel(1, null));
}
