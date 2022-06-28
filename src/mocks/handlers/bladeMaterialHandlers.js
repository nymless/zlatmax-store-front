import { rest } from 'msw';
import { AppPaths } from '../../paths/AppPaths';
import { bladeMaterials } from '../resources/bladeMaterials';

export const bladeMaterialHandlers = [
  rest.get(AppPaths.API_URL + 'blade-material', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(bladeMaterials));
  }),
];
