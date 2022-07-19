import React, { FC } from 'react';
import s from './Panel.module.css';
import { Menu } from './Menu/Menu';
import {
  useGetBrandsQuery,
  useGetCategoriesQuery,
} from '../../../redux/services/productDetailsApi';
import { useGetBladeMaterialsQuery } from '../../../redux/services/knifeMaterialsApi';

interface Props {
  setDropOpened: (toggle: boolean) => void;
}

export const Panel: FC<Props> = (props) => {
  const categories = useGetCategoriesQuery().data;
  const brand = useGetBrandsQuery().data;
  const bladeMaterials = useGetBladeMaterialsQuery().data;

  const handleCategoryClick = (id: number) => {
    props.setDropOpened(false);
  };

  const handleBrandClick = (id: number) => {
    props.setDropOpened(false);
  };

  const handleBladeMaterialClick = (id: number) => {
    props.setDropOpened(false);
  };

  const handleHeaderClick = () => {
    props.setDropOpened(false);
  };

  return (
    <div className={s.panel}>
      {categories && (
        <Menu
          name="Категория ножей"
          list={categories}
          onClickHandler={handleCategoryClick}
          handleHeaderClick={handleHeaderClick}
          path="/category"
        />
      )}
      {brand && (
        <Menu
          name="Производство ножей"
          list={brand}
          onClickHandler={handleBrandClick}
          handleHeaderClick={handleHeaderClick}
          path="/brand"
        />
      )}
      {bladeMaterials && (
        <Menu
          name="Ножи по маркам стали"
          list={bladeMaterials}
          onClickHandler={handleBladeMaterialClick}
          handleHeaderClick={handleHeaderClick}
          path="/material"
        />
      )}
    </div>
  );
};
