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

export const useAppInit = () => {
  const [cookie] = useCookies(['logged_in']);

  userApi.endpoints.getCurrentUser.useQuery(null, {
    skip: cookie.logged_in !== 'true',
    refetchOnMountOrArgChange: true,
  });

  const typesLoaded = Boolean(useGetTypesQuery().data);
  const categoriesLoaded = Boolean(useGetCategoriesQuery().data);
  const brandsLoaded = Boolean(useGetBrandsQuery().data);
  const bladeMaterialsLoaded = Boolean(useGetBladeMaterialsQuery().data);
  const handleMaterialsLoaded = Boolean(useGetHandleMaterialsQuery().data);
  const handguardMaterialsLoaded = Boolean(
    useGetHandguardMaterialsQuery().data
  );
  const gildingTypesLoaded = Boolean(useGetGildingTypesQuery().data);

  return (
    typesLoaded &&
    categoriesLoaded &&
    brandsLoaded &&
    bladeMaterialsLoaded &&
    handleMaterialsLoaded &&
    handguardMaterialsLoaded &&
    gildingTypesLoaded
  );
};
