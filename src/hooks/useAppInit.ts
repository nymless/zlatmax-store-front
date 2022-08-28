import { useEffect } from 'react';
import {
  setAppBladeMaterials,
  setAppBrands,
  setAppCategories,
  setAppGildingTypes,
  setAppHandguardMaterials,
  setAppHandleMaterials,
  setAppTypes,
} from '../redux/reducers/appSlice';
import { useGetBrandsQuery, useGetCategoriesQuery, useGetTypesQuery } from '../redux/api/productDetailsApi';
import {
  useGetBladeMaterialsQuery,
  useGetGildingTypesQuery,
  useGetHandguardMaterialsQuery,
  useGetHandleMaterialsQuery,
} from '../redux/api/knifeMaterialsApi';
import { userApi } from '../redux/api/userApi';
import { useAppDispatch } from '../redux/store';
import { useCookies } from 'react-cookie';

export const useAppInit = () => {
  const dispatch = useAppDispatch();

  const [cookie] = useCookies(['logged_in']);
  userApi.endpoints.getCurrentUser.useQuery(null, {
    skip: cookie.logged_in !== 'true',
    refetchOnMountOrArgChange: true,
  });

  // todo: redundant ?
  const types = useGetTypesQuery().data;
  const categories = useGetCategoriesQuery().data;
  const brands = useGetBrandsQuery().data;
  const bladeMaterials = useGetBladeMaterialsQuery().data;
  const handleMaterials = useGetHandleMaterialsQuery().data;
  const handguardMaterials = useGetHandguardMaterialsQuery().data;
  const gildingTypes = useGetGildingTypesQuery().data;

  useEffect(() => {
    if (!types) {
      return;
    }
    const appTypes = {};
    types.forEach((type) => {
      Object.assign(appTypes, { [type.id]: type.name });
    });
    dispatch(setAppTypes(appTypes));
  }, [dispatch, types]);

  useEffect(() => {
    if (!categories) {
      return;
    }
    const appCategories = {};
    categories.forEach((category) => {
      Object.assign(appCategories, { [category.id]: category.name });
    });
    dispatch(setAppCategories(appCategories));
  }, [dispatch, categories]);

  useEffect(() => {
    if (!brands) {
      return;
    }
    const appBrands = {};
    brands.forEach((brand) => {
      Object.assign(appBrands, { [brand.id]: brand.name });
    });
    dispatch(setAppBrands(appBrands));
  }, [dispatch, brands]);

  useEffect(() => {
    if (!bladeMaterials) {
      return;
    }
    const appBladeMaterials = {};
    bladeMaterials.forEach((bladeMaterial) => {
      Object.assign(appBladeMaterials, {
        [bladeMaterial.id]: bladeMaterial.name,
      });
    });
    dispatch(setAppBladeMaterials(appBladeMaterials));
  }, [dispatch, bladeMaterials]);

  useEffect(() => {
    if (!handleMaterials) {
      return;
    }
    const appHandleMaterials = {};
    handleMaterials.forEach((handleMaterial) => {
      Object.assign(appHandleMaterials, {
        [handleMaterial.id]: handleMaterial.name,
      });
    });
    dispatch(setAppHandleMaterials(appHandleMaterials));
  }, [dispatch, handleMaterials]);

  useEffect(() => {
    if (!handguardMaterials) {
      return;
    }
    const appHandguardMaterials = {};
    handguardMaterials.forEach((handguardMaterial) => {
      Object.assign(appHandguardMaterials, {
        [handguardMaterial.id]: handguardMaterial.name,
      });
    });
    dispatch(setAppHandguardMaterials(appHandguardMaterials));
  }, [dispatch, handguardMaterials]);

  useEffect(() => {
    if (!gildingTypes) {
      return;
    }
    const appGildingTypes = {};
    gildingTypes.forEach((gildingType) => {
      Object.assign(appGildingTypes, {
        [gildingType.id]: gildingType.name,
      });
    });
    dispatch(setAppGildingTypes(appGildingTypes));
  }, [dispatch, gildingTypes]);
};
