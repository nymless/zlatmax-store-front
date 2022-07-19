import RatingFormItem from '../components/ProductFilter/RatingFormItem/RatingFormItem';
import React from 'react';
import {
  useGetBrandsQuery,
  useGetCategoriesQuery,
} from '../redux/services/productDetailsApi';
import {
  useGetBladeMaterialsQuery,
  useGetGildingTypesQuery,
  useGetHandguardMaterialsQuery,
  useGetHandleMaterialsQuery,
} from '../redux/services/knifeMaterialsApi';

export const useFilterFormLists = () => {
  const categories = useGetCategoriesQuery().data;
  const brand = useGetBrandsQuery().data;
  const bladeMaterials = useGetBladeMaterialsQuery().data;
  const handleMaterials = useGetHandleMaterialsQuery().data;
  const handguardMaterials = useGetHandguardMaterialsQuery().data;
  const gildingTypes = useGetGildingTypesQuery().data;

  const rating = [
    { id: 5, name: <RatingFormItem rating={5} text="5/5" /> },
    { id: 4, name: <RatingFormItem rating={4} text="4/5" /> },
    { id: 3, name: <RatingFormItem rating={3} text="3/5" /> },
    { id: 2, name: <RatingFormItem rating={2} text="2/5" /> },
    { id: 1, name: <RatingFormItem rating={1} text="1/5" /> },
  ];

  return {
    categories,
    brand,
    bladeMaterials,
    handleMaterials,
    handguardMaterials,
    gildingTypes,
    rating,
  };
};
