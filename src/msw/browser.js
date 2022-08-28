import { setupWorker } from 'msw';
import { typeHandlers } from './handlers/typeHandlers';
import { categoryHandlers } from './handlers/categoryHandlers';
import { brandHandlers } from './handlers/brandHandlers';
import { bladeMaterialHandlers } from './handlers/bladeMaterialHandlers';
import { handleMaterialHandlers } from './handlers/handleMaterialHandlers';
import { handguardMaterialHandlers } from './handlers/handguardMaterialHandlers';
import { gildingTypeHandlers } from './handlers/gildingTypeHandlers';
import { userHandlers } from './handlers/userHandlers';
import { favoritesHandlers } from './handlers/favoritesHandlers';
import { productHandlers } from './handlers/productHandlers';
import { bladeHandlers } from './handlers/bladeHandlers';
import { handguardHandlers } from './handlers/handguardHandlers';
import { handleHandlers } from './handlers/handleHandlers';
import { reviewHandlers } from './handlers/reviewHandlers';
import { cityHandlers } from './handlers/cityHandlers';
import { countryHandlers } from './handlers/countryHandlers';
import { shippingHandlers } from './handlers/shippingHandlers';
import { articleHandlers } from './handlers/articleHandlers';

export const worker = setupWorker(
  ...typeHandlers,
  ...categoryHandlers,
  ...brandHandlers,
  ...bladeHandlers,
  ...handleHandlers,
  ...handguardHandlers,
  ...bladeMaterialHandlers,
  ...productHandlers,
  ...reviewHandlers,
  ...handleMaterialHandlers,
  ...handguardMaterialHandlers,
  ...gildingTypeHandlers,
  ...userHandlers,
  ...favoritesHandlers,
  ...cityHandlers,
  ...countryHandlers,
  ...shippingHandlers,
  ...articleHandlers
);
