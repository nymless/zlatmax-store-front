import { rest } from 'msw';
import { AppPaths } from '../../variables/AppPaths';
import { reviews } from '../resources/reviews';

export const reviewHandlers = [
  rest.get(AppPaths.API_URL + 'review/:id', (req, res, ctx) => {
    const idString = req.params.id;
    const id = Number.parseInt(idString);

    if (!id) {
      return res(ctx.status(404));
    }

    const review = reviews.find((review) => review.id === id);

    return res(ctx.status(200), ctx.json(review));
  }),

  rest.get(AppPaths.API_URL + 'review', (req, res, ctx) => {
    const productIdString = req.url.searchParams.get('productId');
    const pageString = req.url.searchParams.get('page');
    const limitString = req.url.searchParams.get('limit');

    const productId = Number.parseInt(productIdString);
    const page = Number.parseInt(pageString) || 1;
    const limit = Number.parseInt(limitString) || 2;

    if (!productId) {
      return res(ctx.status(404));
    }

    const reviewsByParams = reviews.reduce((resultArr, review) => {
      if (review.productId === productId) {
        resultArr.push({ ...review });
      }
      return resultArr;
    }, []);

    const offset = page * limit - limit;
    const length = offset + limit - 1;
    const reviewsByPageLimit = [];

    for (let i = offset; i <= length; i++) {
      if (!reviewsByParams[i]) {
        break;
      }
      reviewsByPageLimit.push(reviewsByParams[i]);
    }

    return res(
      ctx.status(200),
      ctx.json({
        rows: reviewsByPageLimit,
        count: reviewsByParams.length,
      })
    );
  }),
];
