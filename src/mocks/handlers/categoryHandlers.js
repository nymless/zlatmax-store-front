import { rest } from 'msw';
import { AppPaths } from '../../paths/AppPaths';
import { categories } from '../resources/categories';

export const categoryHandlers = [
  rest.get(AppPaths.API_URL + 'category', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(categories));
  }),
];
