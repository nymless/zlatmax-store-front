import { rest } from 'msw';
import { AppPaths } from '../../paths/AppPaths';
import { productModels } from '../resources/productModels';
import { info } from '../resources/info';
import { gallery } from '../resources/gallery';

// todo: remove get query if not needed
export const productModelHandlers = [
  rest.get(AppPaths.API_URL + 'product-model/:id', (req, res, ctx) => {
    const idString = req.params.id;
    const id = Number.parseInt(idString);

    if (!id) {
      return res(ctx.status(404));
    }

    const productModel = { ...productModels.find((model) => model.id === id) };

    const productInfo = info.reduce((resultArr, inf) => {
      if (inf.modelId === productModel.id) {
        resultArr.push({ ...inf });
      }
      return resultArr;
    }, []);

    const productGallery = gallery.reduce((resultArr, img) => {
      if (img.modelId === productModel.id) {
        resultArr.push({ ...img });
      }
      return resultArr;
    }, []);

    productModel.info = productInfo;
    productModel.gallery = productGallery;

    return res(ctx.status(200), ctx.json(productModel));
  }),
];
