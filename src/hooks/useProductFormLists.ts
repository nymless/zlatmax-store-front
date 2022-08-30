import {
  useGetBladesByParamsQuery,
  useGetHandguardsByParamsQuery,
  useGetHandlesByParamsQuery,
} from '../redux/api/knifePartsApi';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

export interface Part {
  partId: number;
  partPrice: number;
  partMaterialName: string;
}

export interface Lists {
  bladesList?: Part[];
  handlesList?: Part[];
  handguardsList?: Part[];
  maintenanceList?: Part[];
}

// todo: maintenanceList list from server API

export const useProductFormLists = (productId: number) => {
  const blades = useGetBladesByParamsQuery(productId).data;
  const handles = useGetHandlesByParamsQuery(productId).data;
  const handguards = useGetHandguardsByParamsQuery(productId).data;

  const bladeMaterials = useSelector(
    (state: RootState) => state.appState.appBladeMaterials
  );
  const handleMaterials = useSelector(
    (state: RootState) => state.appState.appHandleMaterials
  );
  const handguardMaterials = useSelector(
    (state: RootState) => state.appState.appHandguardMaterials
  );

  const bladesList: Part[] | undefined = blades?.map((blade) => {
    return {
      partId: blade.id,
      partPrice: blade.partPrice,
      partMaterialName: bladeMaterials[blade.bladeMaterialId],
    };
  });
  const handlesList: Part[] | undefined = handles?.map((handle) => {
    return {
      partId: handle.id,
      partPrice: handle.partPrice,
      partMaterialName: handleMaterials[handle.handleMaterialId],
    };
  });
  const handguardsList: Part[] | undefined = handguards?.map((handguard) => {
    return {
      partId: handguard.id,
      partPrice: handguard.partPrice,
      partMaterialName: handguardMaterials[handguard.handguardMaterialId],
    };
  });

  // todo: from API
  const maintenanceList: Part[] = [
    {
      partId: 1,
      partPrice: 500,
      partMaterialName: 'Заточка ножа',
    },
    {
      partId: 2,
      partPrice: 1000,
      partMaterialName: 'Полировка ножа',
    },
  ];

  return {
    bladesList,
    handlesList,
    handguardsList,
    maintenanceList,
  };
};
