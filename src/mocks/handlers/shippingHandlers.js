import { rest } from 'msw';
import { AppPaths } from '../../paths/AppPaths';
import { shipping } from '../resources/shipping';

export const shippingHandlers = [
  rest.get(AppPaths.API_URL + 'shipping', (req, res, ctx) => {
    const cityIdString = req.url.searchParams.get('cityId');
    const cityId = Number.parseInt(cityIdString);

    if (!cityId) {
      return res(ctx.status(404));
    }

    const shippingByCityId = shipping.filter((company) => {
      return company.cityId === cityId;
    });

    return res(ctx.status(200), ctx.json(shippingByCityId));
  }),
];
