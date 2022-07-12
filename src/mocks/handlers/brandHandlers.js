import { rest } from 'msw';
import { AppPaths } from '../../paths/AppPaths';
import { brands } from '../resources/brands';

export const brandHandlers = [
  rest.get(AppPaths.API_URL + 'brand', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(brands));
  }),

  rest.get(AppPaths.API_URL + 'brand/:id', (req, res, ctx) => {
    const { id } = req.params;

    const brand = brands.find((category) => {
      return category.id === Number.parseInt(id);
    });

    return res(ctx.status(200), ctx.json(brand));
  }),
];
