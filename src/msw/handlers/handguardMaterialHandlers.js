import { rest } from 'msw';
import { AppPaths } from '../../variables/AppPaths';
import { handguardMaterials } from '../resources/handguardMaterials';

export const handguardMaterialHandlers = [
  rest.get(AppPaths.API_URL + 'handguard-material', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(handguardMaterials));
  }),
];
