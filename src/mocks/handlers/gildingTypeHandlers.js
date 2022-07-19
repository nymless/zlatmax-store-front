import { rest } from 'msw';
import { AppPaths } from '../../paths/AppPaths';
import { gildingTypes } from '../resources/gildingTypes';

export const gildingTypeHandlers = [
  rest.get(AppPaths.API_URL + 'gilding-type', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(gildingTypes));
  }),
];
