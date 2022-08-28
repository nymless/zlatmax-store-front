import { rest } from 'msw';
import { AppPaths } from '../../variables/AppPaths';
import { articles } from '../resources/articles';

export const articleHandlers = [
  rest.get(AppPaths.API_URL + 'articles/:id', (req, res, ctx) => {
    const idString = req.params.id;
    const id = Number.parseInt(idString);

    if (!id) {
      return res(ctx.status(404));
    }

    const article = articles.find((article) => article.id === id);

    return res(ctx.status(200), ctx.json(article));
  }),

  rest.get(AppPaths.API_URL + 'articles', (req, res, ctx) => {
    const articlesForCard = articles.map((article) => {
      return {
        id: article.id,
        date: article.date,
        name: article.name,
        img: article.img,
        title: article.title,
      };
    });

    return res(ctx.status(200), ctx.json(articlesForCard));
  }),
];
