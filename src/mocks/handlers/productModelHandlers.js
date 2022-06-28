import { rest } from 'msw';
import { AppPaths } from '../../paths/AppPaths';
import { productModels } from '../resources/productModels';

export const productModelHandlers = [
  rest.get(AppPaths.API_URL + 'product-model', (req, res, ctx) => {
    const typeId = req.url.searchParams.get('typeId');
    const brandId = req.url.searchParams.get('brandId');
    const categoryId = req.url.searchParams.get('categoryId');
    const rating = req.url.searchParams.get('rating');
    const totalLength = req.url.searchParams.get('totalLength');
    const bladeLength = req.url.searchParams.get('bladeLength');
    const bladeWidth = req.url.searchParams.get('bladeWidth');
    const page = req.url.searchParams.get('page') || 1;
    const limit = req.url.searchParams.get('limit') || 10;

    const searchParams = Object.entries({
      typeId,
      brandId,
      categoryId,
      rating,
    });
    const fromParams = Object.entries({
      totalLength: totalLength?.split('-')[0],
      bladeLength: bladeLength?.split('-')[0],
      bladeWidth: bladeWidth?.split('-')[0],
    });
    const toParams = Object.entries({
      totalLength: totalLength?.split('-')[1],
      bladeLength: bladeLength?.split('-')[1],
      bladeWidth: bladeWidth?.split('-')[1],
    });

    const productModelsByParams = productModels.filter((model) => {
      const searchParamsCheckPassed = searchParams.every((param) => {
        return !param[1] || model[param[0]] === param[1];
      });
      const fromParamsCheckPassed = fromParams.every((param) => {
        return !param[1] || model[param[0]] >= param[1];
      });
      const toParamsCheckPassed = toParams.every((param) => {
        return !param[1] || model[param[0]] <= param[1];
      });
      return (
        searchParamsCheckPassed && fromParamsCheckPassed && toParamsCheckPassed
      );
    });

    let offset = page * limit - limit;
    let length = offset + limit;

    const productModelsWithPageLimit = [];

    for (let i = offset; i <= length; i++) {
      if (!productModelsByParams[i]) {
        break;
      }
      productModelsWithPageLimit.push(productModelsByParams[i]);
    }

    return res(
      ctx.status(200),
      ctx.json({
        rows: productModelsWithPageLimit,
        count: productModelsByParams.length,
      })
    );
  }),
];
