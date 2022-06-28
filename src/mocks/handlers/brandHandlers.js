import { rest } from 'msw';
import { AppPaths } from '../../paths/AppPaths';
import { brands } from '../resources/brands';

export const brandHandlers = [
  rest.get(AppPaths.API_URL + 'brand', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(brands));
  }),
];
