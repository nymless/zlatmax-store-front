import { rest } from 'msw';
import { AppPaths } from '../../paths/AppPaths';
import { products } from '../resources/products';
import { handles } from '../resources/handles';

export const handleHandlers = [
  rest.get(AppPaths.API_URL + 'handle', (req, res, ctx) => {
    const productModelIdString = req.url.searchParams.get('productModelId');
    const productModelId = Number.parseInt(productModelIdString);

    if (productModelId) {
      const handlesByProductModelId = handles.filter((handle) => {
        return products.some((product) => {
          if (product.productModelId === productModelId) {
            return product.handleId === handle.id;
          }
          return false;
        });
      });

      return res(ctx.status(200), ctx.json(handlesByProductModelId));
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
