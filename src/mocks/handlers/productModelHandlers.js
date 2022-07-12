import { rest } from 'msw';
import { AppPaths } from '../../paths/AppPaths';
import { productModels } from '../resources/productModels';
import { bladeMaterials } from '../resources/bladeMaterials';
import { handleMaterials } from '../resources/handleMaterials';
import { handguardMaterials } from '../resources/handguardMaterials';
import { products } from '../resources/products';
import { info } from '../resources/info';
import { gallery } from '../resources/gallery';

export const productModelHandlers = [
  rest.get(AppPaths.API_URL + 'product-model/:id', (req, res, ctx) => {
    const id = Number.parseInt(req.params.id);
    const productModel = productModels.find((model) => model.id === id);

    const productInfo = info.filter((inf) => inf.modelId === productModel.id);
    const productGallery = gallery.filter(
      (img) => img.modelId === productModel.id
    );

    productModel.info = productInfo;
    productModel.gallery = productGallery;

    return res(ctx.status(200), ctx.json(productModel));
  }),

  rest.get(AppPaths.API_URL + 'product-model', (req, res, ctx) => {
    const typeId = req.url.searchParams.get('typeId');
    const price = req.url.searchParams.get('price');
    const categoryId = req.url.searchParams.get('categoryId');
    const brandId = req.url.searchParams.get('brandId');
    const bladeMaterialId = req.url.searchParams.get('bladeMaterialId');
    const handleMaterialId = req.url.searchParams.get('handleMaterialId');
    const handguardMaterialId = req.url.searchParams.get('handguardMaterialId');
    const gildingId = req.url.searchParams.get('gildingId');
    const totalLength = req.url.searchParams.get('totalLength');
    const bladeLength = req.url.searchParams.get('bladeLength');
    const bladeWidth = req.url.searchParams.get('bladeWidth');
    const rating = req.url.searchParams.get('rating');
    const page = req.url.searchParams.get('page') || 1;
    const limit = req.url.searchParams.get('limit') || 9;

    const searchParams = Object.entries({
      typeId,
      brandId,
      categoryId,
      bladeMaterialId,
      handleMaterialId,
      handguardMaterialId,
      gildingId,
      rating,
    });
    const fromParams = Object.entries({
      price: price?.split('-')[0],
      totalLength: totalLength?.split('-')[0],
      bladeLength: bladeLength?.split('-')[0],
      bladeWidth: bladeWidth?.split('-')[0],
    });
    const toParams = Object.entries({
      price: price?.split('-')[1],
      totalLength: totalLength?.split('-')[1],
      bladeLength: bladeLength?.split('-')[1],
      bladeWidth: bladeWidth?.split('-')[1],
    });

    const productModelsByParams = productModels.filter((model) => {
      const searchParamsCheckPassed = searchParams.every((param) => {
        return !param[1] || model[param[0]] === Number.parseInt(param[1]);
      });
      const fromParamsCheckPassed = fromParams.every((param) => {
        return !param[1] || model[param[0]] >= Number.parseInt(param[1]);
      });
      const toParamsCheckPassed = toParams.every((param) => {
        return !param[1] || model[param[0]] <= Number.parseInt(param[1]);
      });
      return (
        searchParamsCheckPassed && fromParamsCheckPassed && toParamsCheckPassed
      );
    });

    const offset = page * limit - limit;
    const length = offset + limit - 1;

    const productModelsWithPageLimit = [];

    for (let i = offset; i <= length; i++) {
      if (!productModelsByParams[i]) {
        break;
      }
      productModelsWithPageLimit.push(productModelsByParams[i]);
    }

    const categoryIdInt = Number.parseInt(categoryId);
    const brandIdInt = Number.parseInt(brandId);
    const bladeMaterialIdInt = Number.parseInt(bladeMaterialId);

    const productModelsBySelector = productModels.filter((model) => {
      const categoryCheck = model.categoryId === categoryIdInt;
      const brandCheck = model.brandId === brandIdInt;
      const bladeMaterialCheck = model.bladeMaterialId === bladeMaterialIdInt;

      return categoryCheck || brandCheck || bladeMaterialCheck;
    });

    const rangesForSliders = {
      price: { min: Infinity, max: 0 },
      totalLength: { min: Infinity, max: 0 },
      bladeLength: { min: Infinity, max: 0 },
      bladeWidth: { min: Infinity, max: 0 },
    };

    const mutateRangesMinMax = (range, value) => {
      if (range.min > value) {
        range.min = value;
      }
      if (range.max < value) {
        range.max = value;
      }
    };

    productModelsBySelector.forEach((product) => {
      mutateRangesMinMax(rangesForSliders.price, product.price);
      mutateRangesMinMax(rangesForSliders.totalLength, product.totalLength);
      mutateRangesMinMax(rangesForSliders.bladeLength, product.bladeLength);
      mutateRangesMinMax(rangesForSliders.bladeWidth, product.bladeWidth);
    });

    // adding additional business logic data, needed in Products Page
    productModelsWithPageLimit.forEach((model) => {
      const product = products.find(
        (product) => model.defaultProductId === product.id
      );
      const bladeMaterialId = product.bladeMaterialId;
      const handleMaterialId = product.handleMaterialId;
      const handguardMaterialId = product.handguardMaterialId;
      const bladeMaterial = bladeMaterials.find(
        (blade) => blade.id === bladeMaterialId
      );
      const handleMaterial = handleMaterials.find(
        (blade) => blade.id === handleMaterialId
      );
      const handguardMaterial = handguardMaterials.find(
        (blade) => blade.id === handguardMaterialId
      );

      model.price = product.price;
      model.bladeMaterial = bladeMaterial.name;
      model.handleMaterial = handleMaterial.name;
      model.handguardMaterial = handguardMaterial.name;
    });

    return res(
      ctx.status(200),
      ctx.json({
        rows: productModelsWithPageLimit,
        count: productModelsByParams.length,
        ranges: rangesForSliders,
      })
    );
  }),
];
