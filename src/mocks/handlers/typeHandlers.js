import { rest } from 'msw';
import { AppPaths } from '../../paths/AppPaths';
import { types } from '../resources/types';

export const typeHandlers = [
  rest.get(AppPaths.API_URL + 'type', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(types));
  }),
];
