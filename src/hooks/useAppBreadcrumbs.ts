import {
  useGetBladeMaterialByIdQuery,
  useGetBrandByIdQuery,
  useGetCategoryByIdQuery,
} from '../redux/services/productsApi';
import { UseQuery } from '@reduxjs/toolkit/dist/query/react/buildHooks';
import {
  GetBladeMaterialByIdResponse,
  GetBrandByIdResponse,
  GetCategoryByIdResponse,
} from '../redux/types';

export const useAppBreadcrumbs = (route: string, id: string | undefined) => {
  const names = {
    category: { name: 'Категория ножей', queryHook: useGetCategoryByIdQuery },
    brand: { name: 'Производство ножей', queryHook: useGetBrandByIdQuery },
    bladeMaterial: {
      name: 'Ножи по маркам стали',
      queryHook: useGetBladeMaterialByIdQuery,
    },
  } as Record<string, { name: string; queryHook: UseQuery<any> }>;

  const pageName = (
    names[route].queryHook(id).data as
      | GetCategoryByIdResponse
      | GetBrandByIdResponse
      | GetBladeMaterialByIdResponse
  )?.name;

  const linkName = names[route]?.name;

  return {
    pageName,
    linkName,
  };
};
