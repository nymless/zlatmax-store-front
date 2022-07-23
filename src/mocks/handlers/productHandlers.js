import { rest } from 'msw';
import { AppPaths } from '../../paths/AppPaths';
import { bladeMaterials } from '../resources/bladeMaterials';
import { handleMaterials } from '../resources/handleMaterials';
import { handguardMaterials } from '../resources/handguardMaterials';
import { blades } from '../resources/blades';
import { handles } from '../resources/handles';
import { handguards } from '../resources/handguards';
import { info } from '../resources/info';
import { gallery } from '../resources/gallery';
import { products } from '../resources/products';

export const productHandlers = [
  rest.get(AppPaths.API_URL + 'product/:id', (req, res, ctx) => {
    const idString = req.params.id;
    const id = Number.parseInt(idString);

    if (!id) {
      return res(ctx.status(404));
    }

    const product = { ...products.find((product) => product.id === id) };

    const { productInfo, productGallery } = findProductsInfoAndGallery(product);

    const {
      bladePrice,
      handlePrice,
      handguardPrice,
      bladeMaterialName,
      handleMaterialName,
      handguardMaterialName,
    } = findMaterialsNameAndPrice(product);

    product.info = productInfo;
    product.gallery = productGallery;

    product.bladePrice = bladePrice;
    product.handlePrice = handlePrice;
    product.handguardPrice = handguardPrice;

    product.bladeMaterialName = bladeMaterialName;
    product.handleMaterialName = handleMaterialName;
    product.handguardMaterialName = handguardMaterialName;

    return res(ctx.status(200), ctx.json(product));
  }),

  rest.get(AppPaths.API_URL + 'product', (req, res, ctx) => {
    const { page, limit, ...restParams } = getParamsFromUrl(req);
    const productsByParams = filterByParams(restParams);
    const productsByPageLimit = filterByPageLimit(
      productsByParams,
      page,
      limit
    );
    const rangesForSliders = findRangesForProductFormSliders(
      restParams.categoryId,
      restParams.brandId,
      restParams.bladeMaterialId
    );
    productsByPageLimit.forEach((product) => {
      const { bladeMaterialName, handleMaterialName, handguardMaterialName } =
        findMaterialsNameAndPrice(product);

      product.bladeMaterialName = bladeMaterialName;
      product.handleMaterialName = handleMaterialName;
      product.handguardMaterialName = handguardMaterialName;
    });

    return res(
      ctx.status(200),
      ctx.json({
        rows: productsByPageLimit,
        count: productsByParams.length,
        ranges: rangesForSliders,
      })
    );
  }),
];

function findProductsInfoAndGallery(product) {
  const productInfo = info.reduce((resultArr, inf) => {
    if (inf.productId === product.id) {
      resultArr.push({ ...inf });
    }
    return resultArr;
  }, []);
  const productGallery = gallery.reduce((resultArr, img) => {
    if (img.productId === product.id) {
      resultArr.push({ ...img });
    }
    return resultArr;
  }, []);

  return {
    productInfo,
    productGallery,
  };
}

function findMaterialsNameAndPrice(product) {
  const blade = blades.find((blade) => {
    return blade.id === product.defaultBladeId;
  });
  const handle = handles.find((handle) => {
    return handle.id === product.defaultHandleId;
  });
  const handguard = handguards.find((handguard) => {
    return handguard.id === product.defaultHandguardId;
  });

  const bladeMaterialName = bladeMaterials.find((bladeMaterial) => {
    return bladeMaterial.id === blade.bladeMaterialId;
  }).name;
  const handleMaterialName = handleMaterials.find((handleMaterial) => {
    return handleMaterial.id === handle.handleMaterialId;
  }).name;
  const handguardMaterialName = handguardMaterials.find((handguardMaterial) => {
    return handguardMaterial.id === handguard.handguardMaterialId;
  }).name;

  return {
    bladePrice: blade.partPrice,
    handlePrice: handle.partPrice,
    handguardPrice: handguard.partPrice,
    bladeMaterialName,
    handleMaterialName,
    handguardMaterialName,
  };
}

function getParamsFromUrl(req) {
  const typeId = req.url.searchParams.get('typeId');
  const price = req.url.searchParams.get('price');
  const categoryId = req.url.searchParams.get('categoryId');
  const brandId = req.url.searchParams.get('brandId');
  const bladeMaterialId = req.url.searchParams.get('bladeMaterialId');
  const handleMaterialId = req.url.searchParams.get('handleMaterialId');
  const handguardMaterialId = req.url.searchParams.get('handguardMaterialId');
  const gildingTypeId = req.url.searchParams.get('gildingTypeId');
  const totalLength = req.url.searchParams.get('totalLength');
  const bladeLength = req.url.searchParams.get('bladeLength');
  const bladeWidth = req.url.searchParams.get('bladeWidth');
  const rating = req.url.searchParams.get('rating');
  const page = req.url.searchParams.get('page') || 1;
  const limit = req.url.searchParams.get('limit') || 9;

  return {
    typeId,
    price,
    categoryId,
    brandId,
    bladeMaterialId,
    handleMaterialId,
    handguardMaterialId,
    gildingTypeId,
    totalLength,
    bladeLength,
    bladeWidth,
    rating,
    page,
    limit,
  };
}

function filterByParams(params) {
  const searchParams = Object.entries({
    typeId: params.typeId,
    brandId: params.brandId,
    categoryId: params.categoryId,
    rating: params.rating,
    bladeMaterialId: params.bladeMaterialId,
    handleMaterialId: params.handleMaterialId,
    handguardMaterialId: params.handguardMaterialId,
    gildingTypeId: params.gildingTypeId,
  });

  const fromParams = Object.entries({
    defaultPrice: params.price?.split('-')[0],
    totalLength: params.totalLength?.split('-')[0],
    bladeLength: params.bladeLength?.split('-')[0],
    bladeWidth: params.bladeWidth?.split('-')[0],
  });

  const toParams = Object.entries({
    defaultPrice: params.price?.split('-')[1],
    totalLength: params.totalLength?.split('-')[1],
    bladeLength: params.bladeLength?.split('-')[1],
    bladeWidth: params.bladeWidth?.split('-')[1],
  });

  return products.reduce((resultArr, model) => {
    const searchParamsCheckPassed = searchParams.every((param) => {
      return !param[1] || model[param[0]] === Number.parseInt(param[1]);
    });
    const fromParamsCheckPassed = fromParams.every((param) => {
      return !param[1] || model[param[0]] >= Number.parseInt(param[1]);
    });
    const toParamsCheckPassed = toParams.every((param) => {
      return !param[1] || model[param[0]] <= Number.parseInt(param[1]);
    });
    if (
      searchParamsCheckPassed &&
      fromParamsCheckPassed &&
      toParamsCheckPassed
    ) {
      resultArr.push({ ...model });
    }
    return resultArr;
  }, []);
}

function filterByPageLimit(products, page, limit) {
  const offset = page * limit - limit;
  const length = offset + limit - 1;

  const productsByPageLimit = [];

  for (let i = offset; i <= length; i++) {
    if (!products[i]) {
      break;
    }
    productsByPageLimit.push(products[i]);
  }

  return productsByPageLimit;
}

function findRangesForProductFormSliders(categoryId, brandId, bladeMaterialId) {
  const categoryIdInt = Number.parseInt(categoryId);
  const brandIdInt = Number.parseInt(brandId);
  const bladeMaterialIdInt = Number.parseInt(bladeMaterialId);

  const productsInitialSelection = products.reduce((resultArr, product) => {
    const categoryCheck = product.categoryId === categoryIdInt;
    const brandCheck = product.brandId === brandIdInt;
    const bladeMaterialCheck = product.bladeMaterialId === bladeMaterialIdInt;

    if (categoryCheck || brandCheck || bladeMaterialCheck) {
      resultArr.push({ ...product });
    }
    return resultArr;
  }, []);

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

  productsInitialSelection.forEach((product) => {
    mutateRangesMinMax(rangesForSliders.price, product.defaultPrice);
    mutateRangesMinMax(rangesForSliders.totalLength, product.totalLength);
    mutateRangesMinMax(rangesForSliders.bladeLength, product.bladeLength);
    mutateRangesMinMax(rangesForSliders.bladeWidth, product.bladeWidth);
  });

  return rangesForSliders;
}
