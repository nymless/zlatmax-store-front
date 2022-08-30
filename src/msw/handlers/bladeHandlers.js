import { rest } from 'msw';
import { AppPaths } from '../../variables/AppPaths';
import { blades } from '../resources/blades';

export const bladeHandlers = [
  rest.get(AppPaths.API_URL + 'blade', (req, res, ctx) => {
    const productIdString = req.url.searchParams.get('productId');
    const productId = Number.parseInt(productIdString);

    if (productId) {
      const bladesByProductId = blades.filter((blade) => {
        return blade.productId === productId;
      });

      return res(ctx.status(200), ctx.json(bladesByProductId));
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
