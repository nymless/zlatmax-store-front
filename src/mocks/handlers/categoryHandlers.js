import { rest } from 'msw';
import { AppPaths } from '../../variables/AppPaths';
import { categories } from '../resources/categories';

export const categoryHandlers = [
  rest.get(AppPaths.API_URL + 'category', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(categories));
  }),

  rest.get(AppPaths.API_URL + 'category/:id', (req, res, ctx) => {
    const { id } = req.params;

    const category = categories.find((category) => {
      return category.id === Number.parseInt(id);
    });

    return res(ctx.status(200), ctx.json(category));
  }),
];
