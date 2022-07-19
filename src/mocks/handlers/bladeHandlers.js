import { rest } from 'msw';
import { AppPaths } from '../../paths/AppPaths';
import { blades } from '../resources/blades';
import { products } from '../resources/products';

export const bladeHandlers = [
  rest.get(AppPaths.API_URL + 'blade', (req, res, ctx) => {
    const productModelIdString = req.url.searchParams.get('productModelId');
    const productModelId = Number.parseInt(productModelIdString);

    if (productModelId) {
      const bladesByProductModelId = blades.filter((blade) => {
        return products.some((product) => {
          if (product.productModelId === productModelId) {
            return product.bladeId === blade.id;
          }
          return false;
        });
      });

      return res(ctx.status(200), ctx.json(bladesByProductModelId));
    }

    return res(ctx.status(200), ctx.json(blades));
  }),

  rest.get(AppPaths.API_URL + 'blade/:id', (req, res, ctx) => {
    const { id } = req.params;

    const blade = blades.find((blade) => {
      return blade.id === Number.parseInt(id);
    });

    return res(ctx.status(200), ctx.json(blade));
  }),
];
