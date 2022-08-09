import { rest } from 'msw';
import { AppPaths } from '../../variables/AppPaths';
import { user } from '../resources/user';

export const userHandlers = [
  rest.get(AppPaths.API_URL + 'user', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(user));
  }),
];
