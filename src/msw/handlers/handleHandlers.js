import { rest } from 'msw';
import { AppPaths } from '../../variables/AppPaths';
import { handles } from '../resources/handles';

export const handleHandlers = [
  rest.get(AppPaths.API_URL + 'handle', (req, res, ctx) => {
    const productIdString = req.url.searchParams.get('productId');
    const productId = Number.parseInt(productIdString);

    if (productId) {
      const handlesByProductId = handles.filter((handle) => {
        return handle.productId === productId;
      });

      return res(ctx.status(200), ctx.json(handlesByProductId));
    }

    return res(ctx.status(200), ctx.json(handles));
  }),

  rest.get(AppPaths.API_URL + 'handle/:id', (req, res, ctx) => {
    const { id } = req.params;

    const handle = handles.find((handle) => {
      return handle.id === Number.parseInt(id);
    });

    return res(ctx.status(200), ctx.json(handle));
  }),
];
