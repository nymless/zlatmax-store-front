import React, { FC } from "react";
import s from "./Panel.module.css";
import { Menu } from "./Menu/Menu";
import { ProductSelectors } from "../../../hooks/useProductSelectors";
import {
  useGetCategoriesQuery,
  useGetBrandsQuery,
  useGetBladeMaterialsQuery,
} from "../../../redux/services/productsApi";

interface Props {
  selectors: ProductSelectors;
  setDropOpened: (toggle: boolean) => void;
}

export const Panel: FC<Props> = (props) => {
  const categories = useGetCategoriesQuery().data;
  const brand = useGetBrandsQuery().data;
  const bladeMaterials = useGetBladeMaterialsQuery().data;

  const handleCategoryClick = (id: number) => {
    props.setDropOpened(false);
    props.selectors.setCategoryId(id);
  };

  const handleBrandClick = (id: number) => {
    props.setDropOpened(false);
    props.selectors.setBrandId(id);
  };

  const handleBladeMaterialClick = (id: number) => {
    props.setDropOpened(false);
    props.selectors.setBladeMaterialId(id);
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
          selectors={props.selectors}
        />
      )}
      {brand && (
        <Menu
          name="Производство ножей"
          list={brand}
          onClickHandler={handleBrandClick}
          handleHeaderClick={handleHeaderClick}
          path="/brand"
          selectors={props.selectors}
        />
      )}
      {bladeMaterials && (
        <Menu
          name="Ножи по маркам стали"
          list={bladeMaterials}
          onClickHandler={handleBladeMaterialClick}
          handleHeaderClick={handleHeaderClick}
          path="/material"
          selectors={props.selectors}
        />
      )}
    </div>
  );
};
