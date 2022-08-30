import { rest } from 'msw';
import { AppPaths } from '../../variables/AppPaths';
import { handguards } from '../resources/handguards';

export const handguardHandlers = [
  rest.get(AppPaths.API_URL + 'handguard', (req, res, ctx) => {
    const productIdString = req.url.searchParams.get('productId');
    const productId = Number.parseInt(productIdString);

    if (productId) {
      const handguardsByProductId = handguards.filter((handguard) => {
        return handguard.productId === productId;
      });

      return res(ctx.status(200), ctx.json(handguardsByProductId));
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
