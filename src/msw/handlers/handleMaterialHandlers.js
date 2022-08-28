import { rest } from 'msw';
import { AppPaths } from '../../variables/AppPaths';
import { handleMaterials } from '../resources/handleMaterials';

export const handleMaterialHandlers = [
  rest.get(AppPaths.API_URL + 'handle-material', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(handleMaterials));
  }),
];
