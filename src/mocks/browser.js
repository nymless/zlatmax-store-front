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

export const worker = setupWorker(
  ...typeHandlers,
  ...categoryHandlers,
  ...brandHandlers,
  ...bladeHandlers,
  ...handleHandlers,
  ...handguardHandlers,
  ...bladeMaterialHandlers,
  ...productHandlers,
  ...handleMaterialHandlers,
  ...handguardMaterialHandlers,
  ...gildingTypeHandlers,
  ...userHandlers,
  ...favoritesHandlers
);
