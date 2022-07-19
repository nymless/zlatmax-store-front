import { rest } from 'msw';
import { AppPaths } from '../../paths/AppPaths';
import { products } from '../resources/products';
import { productModels } from '../resources/productModels';
import { bladeMaterials } from '../resources/bladeMaterials';
import { handleMaterials } from '../resources/handleMaterials';
import { handguardMaterials } from '../resources/handguardMaterials';
import { blades } from '../resources/blades';
import { handles } from '../resources/handles';
import { handguards } from '../resources/handguards';
import { info } from '../resources/info';
import { gallery } from '../resources/gallery';

export const productHandlers = [
  rest.get(AppPaths.API_URL + 'product/:id', (req, res, ctx) => {
    const id = Number.parseInt(req.params.id);
    const product = { ...products.find((product) => product.id === id) };
    const productModel = {
      ...productModels.find((model) => {
        return (model.id = product.productModelId);
      }),
    };

    const productInfo = info.reduce((resultArr, inf) => {
      if (inf.modelId === productModel.id) {
        resultArr.push({ ...inf });
      }
      return resultArr;
    }, []);

    const productGallery = gallery.reduce((resultArr, img) => {
      if (img.modelId === productModel.id) {
        resultArr.push({ ...img });
      }
      return resultArr;
    }, []);

    productModel.info = productInfo;
    productModel.gallery = productGallery;

    const blade = {
      ...blades.find((blade) => {
        return blade.id === product.bladeId;
      }),
    };
    const handle = {
      ...handles.find((handle) => {
        return handle.id === product.handleId;
      }),
    };
    const handguard = {
      ...handguards.find((handguard) => {
        return handguard.id === product.handguardId;
      }),
    };

    const bladeMaterial = {
      ...bladeMaterials.find((bladeMaterial) => {
        return bladeMaterial.id === blade.bladeMaterialId;
      }),
    };
    const handleMaterial = {
      ...handleMaterials.find((handleMaterial) => {
        return handleMaterial.id === handle.handleMaterialId;
      }),
    };
    const handguardMaterial = {
      ...handguardMaterials.find((handguardMaterial) => {
        return handguardMaterial.id === handguard.handguardMaterialId;
      }),
    };

    product.productModel = productModel;
    product.bladePrice = blade.price;
    product.bladeMaterial = bladeMaterial;
    product.handlePrice = handle.price;
    product.handleMaterial = handleMaterial;
    product.handguardPrice = handguard.price;
    product.handguardMaterial = handguardMaterial;

    return res(ctx.status(200), ctx.json(product));
  }),

  rest.get(AppPaths.API_URL + 'product', (req, res, ctx) => {
    const productModelId = req.url.searchParams.get('productModelId');

    if (productModelId) {
      const productsByProductModelId = products.reduce((resultArr, product) => {
        if (product.productModelId !== Number.parseInt(productModelId)) {
          resultArr.push({ ...product });
        }
        return resultArr;
      }, []);

      return res(
        ctx.status(200),
        ctx.json({
          rows: productsByProductModelId,
          count: productsByProductModelId.length,
          ranges: {},
        })
      );
    }

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

    const productsWithProductModelFields = products.map((product) => {
      const productModel = {
        ...productModels.find((productModel) => {
          return productModel.id === product.productModelId;
        }),
      };

      const {
        typeId,
        categoryId,
        brandId,
        totalLength,
        bladeLength,
        bladeWidth,
      } = productModel;

      return Object.assign(
        {},
        product,
        { typeId },
        { categoryId },
        { brandId },
        { totalLength },
        { bladeLength },
        { bladeWidth },
        {
          bladeMaterialId: blades.find((blade) => {
            return blade.id === product.bladeId;
          })?.bladeMaterialId,
        },
        {
          handleMaterialId: handles.find((handle) => {
            return handle.id === product.handleId;
          })?.handleMaterialId,
        },
        {
          handguardMaterialId: handguards.find((handguard) => {
            return handguard.id === product.handguardId;
          })?.handguardMaterialId,
        },
        { productModel }
      );
    });

    const searchParams = Object.entries({
      typeId,
      brandId,
      categoryId,
      rating,
      bladeMaterialId,
      handleMaterialId,
      handguardMaterialId,
      gildingTypeId,
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

    const productsByParams = productsWithProductModelFields.reduce(
      (resultArr, model) => {
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
      },
      []
    );

    const offset = page * limit - limit;
    const length = offset + limit - 1;

    const productsWithPageLimit = [];

    for (let i = offset; i <= length; i++) {
      if (!productsByParams[i]) {
        break;
      }
      productsWithPageLimit.push(productsByParams[i]);
    }

    const categoryIdInt = Number.parseInt(categoryId);
    const brandIdInt = Number.parseInt(brandId);
    const bladeMaterialIdInt = Number.parseInt(bladeMaterialId);

    const productsBySelector = productsWithProductModelFields.reduce(
      (resultArr, product) => {
        const categoryCheck = product.categoryId === categoryIdInt;
        const brandCheck = product.brandId === brandIdInt;
        const bladeMaterialCheck =
          product.bladeMaterialId === bladeMaterialIdInt;

        if (categoryCheck || brandCheck || bladeMaterialCheck) {
          resultArr.push({ ...product });
        }
        return resultArr;
      },
      []
    );

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

    productsBySelector.forEach((product) => {
      mutateRangesMinMax(rangesForSliders.price, product.price);
      mutateRangesMinMax(rangesForSliders.totalLength, product.totalLength);
      mutateRangesMinMax(rangesForSliders.bladeLength, product.bladeLength);
      mutateRangesMinMax(rangesForSliders.bladeWidth, product.bladeWidth);
    });

    // adding additional business logic data, needed in Products Page
    productsWithPageLimit.forEach((product) => {
      const bladeMaterial = bladeMaterials.find((bladeMaterial) => {
        return bladeMaterial.id === product.bladeMaterialId;
      });
      const handleMaterial = handleMaterials.find((handleMaterial) => {
        return handleMaterial.id === product.handleMaterialId;
      });
      const handguardMaterial = handguardMaterials.find((handguardMaterial) => {
        return handguardMaterial.id === product.handguardMaterialId;
      });

      product.bladeMaterial = bladeMaterial?.name;
      product.handleMaterial = handleMaterial?.name;
      product.handguardMaterial = handguardMaterial?.name;
    });

    return res(
      ctx.status(200),
      ctx.json({
        rows: productsWithPageLimit,
        count: productsByParams.length,
        ranges: rangesForSliders,
      })
    );
  }),
];
