import { rest } from 'msw';
import { AppPaths } from '../../paths/AppPaths';
import { cities } from '../resources/cities';

export const cityHandlers = [
  rest.get(AppPaths.API_URL + 'city', (req, res, ctx) => {
    const countryIdString = req.url.searchParams.get('countryId');
    const countryId = Number.parseInt(countryIdString);

    if (countryId) {
      const citiesByCountryId = cities.filter((city) => {
        return city.countryId === countryId;
      });

      return res(ctx.status(200), ctx.json(citiesByCountryId));
    }

    return res(ctx.status(200), ctx.json(cities));
  }),
];
