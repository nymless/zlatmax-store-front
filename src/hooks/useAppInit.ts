import {
  useGetBrandsQuery,
  useGetCategoriesQuery,
  useGetTypesQuery,
} from '../redux/api/productDetailsApi';
import {
  useGetBladeMaterialsQuery,
  useGetGildingTypesQuery,
  useGetHandguardMaterialsQuery,
  useGetHandleMaterialsQuery,
} from '../redux/api/knifeMaterialsApi';
import { userApi } from '../redux/api/userApi';
import { useCookies } from 'react-cookie';
import { useState, useEffect } from 'react';

export const useAppInit = () => {
  const [appInitialized, setAppInitialized] = useState(false);
  const [cookie] = useCookies(['logged_in']);

  userApi.endpoints.getCurrentUser.useQuery(null, {
    skip: cookie.logged_in !== 'true',
    refetchOnMountOrArgChange: true,
  });

  const typesLoaded = useGetTypesQuery().isSuccess;
  const categoriesLoaded = useGetCategoriesQuery().isSuccess;
  const brandsLoaded = useGetBrandsQuery().isSuccess;
  const bladeMaterialsLoaded = useGetBladeMaterialsQuery().isSuccess;
  const handleMaterialsLoaded = useGetHandleMaterialsQuery().isSuccess;
  const handguardMaterialsLoaded = useGetHandguardMaterialsQuery().isSuccess;
  const gildingTypesLoaded = useGetGildingTypesQuery().isSuccess;

  useEffect(() => {
    setAppInitialized(
      typesLoaded &&
        categoriesLoaded &&
        brandsLoaded &&
        bladeMaterialsLoaded &&
        handleMaterialsLoaded &&
        handguardMaterialsLoaded &&
        gildingTypesLoaded
    );
  }, [
    typesLoaded,
    categoriesLoaded,
    brandsLoaded,
    bladeMaterialsLoaded,
    handleMaterialsLoaded,
    handguardMaterialsLoaded,
    gildingTypesLoaded,
  ]);

  return { appInitialized };
};
