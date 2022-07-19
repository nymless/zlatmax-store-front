import {
  useGetBladesByParamsQuery,
  useGetHandguardsByParamsQuery,
  useGetHandlesByParamsQuery,
} from '../redux/services/knifePartsApi';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

export const useProductFormLists = (
  productModelId: number,
  productId: number
) => {
  const blades = useGetBladesByParamsQuery(productModelId).data;
  const handles = useGetHandlesByParamsQuery(productModelId).data;
  const handguards = useGetHandguardsByParamsQuery(productModelId).data;

  const bladeMaterials = useSelector(
    (state: RootState) => state.app.appBladeMaterials
  );
  const handleMaterials = useSelector(
    (state: RootState) => state.app.appHandleMaterials
  );
  const handguardMaterials = useSelector(
    (state: RootState) => state.app.appHandguardMaterials
  );

  const bladesList = blades?.map((blade) => {
    return {
      id: blade.id,
      price: blade.price,
      name: bladeMaterials[blade.bladeMaterialId],
    };
  });
  const handlesList = handles?.map((handle) => {
    return {
      id: handle.id,
      price: handle.price,
      name: handleMaterials[handle.handleMaterialId],
    };
  });
  const handguardsList = handguards?.map((handguard) => {
    return {
      id: handguard.id,
      price: handguard.price,
      name: handguardMaterials[handguard.handguardMaterialId],
    };
  });

  return {
    bladesList,
    handlesList,
    handguardsList,
  };
};
