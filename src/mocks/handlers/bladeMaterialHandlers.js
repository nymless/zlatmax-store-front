import { rest } from 'msw';
import { AppPaths } from '../../variables/AppPaths';
import { bladeMaterials } from '../resources/bladeMaterials';

export const bladeMaterialHandlers = [
  rest.get(AppPaths.API_URL + 'blade-material', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(bladeMaterials));
  }),

  rest.get(AppPaths.API_URL + 'blade-material/:id', (req, res, ctx) => {
    const { id } = req.params;

    const bladeMaterial = bladeMaterials.find((category) => {
      return category.id === Number.parseInt(id);
    });

    return res(ctx.status(200), ctx.json(bladeMaterial));
  }),
];
