import React, { FC } from 'react';
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
import styles from '../components/ProductFilter/ProductFilterForm.module.css';
import RatingStars from '../shared/RatingStars/RatingStars';

interface RaringFormItemProps {
  rating: number;
  text: string;
}

const RatingFormItem: FC<RaringFormItemProps> = (props) => {
  return (
    <div className={styles.rating}>
      <div>
        <RatingStars rating={props.rating} />
      </div>
      <div>{props.text}</div>
    </div>
  );
};

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
