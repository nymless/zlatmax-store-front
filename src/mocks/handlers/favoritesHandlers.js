import { rest } from 'msw';
import { AppPaths } from '../../paths/AppPaths';
import { favorites } from '../resources/favorites';

let counter = 0;

export const favoritesHandlers = [
  rest.get(AppPaths.API_URL + 'favorites', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(favorites));
  }),

  rest.post(AppPaths.API_URL + 'favorites', (req, res, ctx) => {
    const userId = req.body.userId;
    const modelId = req.body.modelId;

    const newFavorite = {
      id: ++counter,
      userId,
      modelId,
    };

    favorites.push(newFavorite);

    return res(ctx.status(200));
  }),

  rest.delete(AppPaths.API_URL + 'favorites', (req, res, ctx) => {
    const userId = req.body.userId;
    const modelId = req.body.modelId;

    for (let i = 0; i < favorites.length; i++) {
      const matches =
        favorites[i].userId === userId && favorites[i].modelId === modelId;
      if (matches) {
        favorites.splice(i, 1);
        i--;
      }
    }

    return res(ctx.status(200));
  }),
];
