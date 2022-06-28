import { rest } from 'msw';
import { AppPaths } from '../../paths/AppPaths';
import { gildings } from '../resources/gildings';

export const gildingHandlers = [
  rest.get(AppPaths.API_URL + 'gilding', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(gildings));
  }),
];
