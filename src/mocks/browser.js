import { setupWorker } from 'msw';
import { typeHandlers } from './handlers/typeHandlers';
import { categoryHandlers } from './handlers/categoryHandlers';
import { brandHandlers } from './handlers/brandHandlers';
import { bladeMaterialHandlers } from './handlers/bladeMaterialHandlers';
import { productModelHandlers } from './handlers/productModelHandlers';
import { handleMaterialHandlers } from './handlers/handleMaterialHandlers';
import { handguardMaterialHandlers } from './handlers/handguardMaterialHandlers';
import { gildingHandlers } from './handlers/gildingHandlers';

export const worker = setupWorker(
  ...typeHandlers,
  ...categoryHandlers,
  ...brandHandlers,
  ...bladeMaterialHandlers,
  ...productModelHandlers,
  ...handleMaterialHandlers,
  ...handguardMaterialHandlers,
  ...gildingHandlers
);
