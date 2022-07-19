import { rest } from 'msw';
import { AppPaths } from '../../paths/AppPaths';
import { products } from '../resources/products';
import { handguards } from '../resources/handguards';

export const handguardHandlers = [
  rest.get(AppPaths.API_URL + 'handguard', (req, res, ctx) => {
    const productModelIdString = req.url.searchParams.get('productModelId');
    const productModelId = Number.parseInt(productModelIdString);

    if (productModelId) {
      const handguardsByProductModelId = handguards.filter((handguard) => {
        return products.some((product) => {
          if (product.productModelId === productModelId) {
            return product.handguardId === handguard.id;
          }
          return false;
        });
      });

      return res(ctx.status(200), ctx.json(handguardsByProductModelId));
    }

    return res(ctx.status(200), ctx.json(handguards));
  }),

  rest.get(AppPaths.API_URL + 'handguard/:id', (req, res, ctx) => {
    const { id } = req.params;

    const handguard = handguards.find((handguard) => {
      return handguard.id === Number.parseInt(id);
    });

    return res(ctx.status(200), ctx.json(handguard));
  }),
];
