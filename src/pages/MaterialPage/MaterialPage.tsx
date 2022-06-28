import React, { FC } from "react";
import styles from "./MaterialPage.module.css";
import { SelectorCard } from "../../components/SelectorCard/SelectorCard";
import { ProductSelectors } from "../../hooks/useProductSelectors";
import { useGetBladeMaterialsQuery } from "../../redux/services/productsApi";
import { withContainer } from "../../hoc/withContainer";

interface MaterialPageProps {
  selectors: ProductSelectors;
}

const MaterialPage: FC<MaterialPageProps> = (props) => {
  const materials = useGetBladeMaterialsQuery().data;

  const onClickHandler = (id: number) => {
    props.selectors.setBladeMaterialId(id);
  };

  return (
    <div className="_container">
      <div className={styles.MaterialPage}>
        <div className={styles.heading}>Ножи по маркам стали</div>
        <div className={styles.breadcrumbs}>Breadcrumbs...</div>
        <div className={styles.body}>
          {materials &&
            materials.map((material) => {
              return (
                <SelectorCard
                  key={material.id}
                  name={material.name}
                  img={material.img}
                  id={material.id}
                  onClickHandler={onClickHandler}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default withContainer(MaterialPage);
