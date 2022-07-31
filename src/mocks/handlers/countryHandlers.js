import { rest } from 'msw';
import { AppPaths } from '../../paths/AppPaths';
import { counries } from '../resources/counries';

export const countryHandlers = [
  rest.get(AppPaths.API_URL + 'country', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(counries));
  }),
];
