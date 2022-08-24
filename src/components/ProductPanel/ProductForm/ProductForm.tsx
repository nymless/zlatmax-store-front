import React, { FC, useEffect } from 'react';
import styles from './ProductForm.module.css';
import { FormikHandlers } from 'formik';
import ProductFormSelect from '../ProductFormSelect/ProductFormSelect';
import { Part, useProductFormLists } from '../../../hooks/useProductFormLists';
import { ProductForProductPage } from '../../../redux/models/types';
import AppListItem from './ListItem/AppListItem';
import { MenuItem } from '../ProductFormSelect/MuiStyled/MenuItem';

interface ProductFormValues {
  bladeId: number;
  handleId: number;
  handguardId: number;
  maintenanceId: number | string;
}

interface ProductFormProps {
  values: ProductFormValues;
  handleChange: FormikHandlers['handleChange'];
  setPrice: React.Dispatch<React.SetStateAction<number>>;
  setOldPrice: React.Dispatch<React.SetStateAction<number>>;
  discountMultiplier: number;
  product: ProductForProductPage;
}

const ProductForm: FC<ProductFormProps> = (props) => {
  const { bladesList, handlesList, handguardsList, maintenanceList } =
    useProductFormLists(props.product.id);

  useEffect(() => {
    if (!bladesList || !handlesList || !handguardsList || !maintenanceList) {
      return;
    }
    const blade = bladesList.find((blade) => {
      return blade.partId === props.values.bladeId;
    });
    const handle = handlesList.find((handle) => {
      return handle.partId === props.values.handleId;
    });
    const handguard = handguardsList.find((handguard) => {
      return handguard.partId === props.values.handguardId;
    });
    const maintenance = maintenanceList.find((maintenance) => {
      return maintenance.partId === props.values.maintenanceId;
    });

    const bladePrice = blade ? blade.partPrice : 0;
    const handlePrice = handle ? handle.partPrice : 0;
    const handguardPrice = handguard ? handguard.partPrice : 0;
    const maintenancePrice = maintenance ? maintenance.partPrice : 0;
    const basePrice = props.product.basePrice;

    const price =
      basePrice + handguardPrice + handlePrice + bladePrice + maintenancePrice;

    props.setPrice(price * props.discountMultiplier);
    props.setOldPrice(price);
  }, [bladesList, handguardsList, handlesList, maintenanceList, props]);

  return (
    <div className={styles.ProductForm}>
      <span className={styles.formLabel}>Сталь</span>
      <ProductFormSelect
        name="bladeId"
        label="Выбрать сталь"
        partsList={bladesList}
        handleChange={props.handleChange}
        currentPartPrice={props.product.bladePrice}
        initialValue={props.product.defaultBladeId}
        render={(part: Part) => (
          <AppListItem
            part={part}
            currentPrice={props.product.bladePrice}
            discountMultiplier={props.discountMultiplier}
          />
        )}
      />
      <span className={styles.formLabel}>Рукоять</span>
      <ProductFormSelect
        name="handleId"
        label="Выбрать рукоять"
        partsList={handlesList}
        handleChange={props.handleChange}
        currentPartPrice={props.product.handlePrice}
        initialValue={props.product.defaultHandleId}
        render={(part: Part) => (
          <AppListItem
            part={part}
            currentPrice={props.product.handlePrice}
            discountMultiplier={props.discountMultiplier}
          />
        )}
      />
      <span className={styles.formLabel}>Гарда и тыльник</span>
      <ProductFormSelect
        name="handguardId"
        label="Выбрать гарду и тыльник"
        partsList={handguardsList}
        handleChange={props.handleChange}
        currentPartPrice={props.product.handguardPrice}
        initialValue={props.product.defaultHandguardId}
        render={(part: Part) => (
          <AppListItem
            part={part}
            currentPrice={props.product.handguardPrice}
            discountMultiplier={props.discountMultiplier}
          />
        )}
      />
      <span className={styles.formLabel}>Обработка клинка</span>
      <ProductFormSelect
        name="maintenanceId"
        label="Выбрать обработку клинка"
        partsList={maintenanceList}
        handleChange={props.handleChange}
        currentPartPrice={0}
        initialValue={''}
        render={(part: Part) => (
          <div>{`${part.partMaterialName} (+${part.partPrice})`}</div>
        )}
      >
        <MenuItem value="">Не выбрано</MenuItem>
      </ProductFormSelect>
    </div>
  );
};

export default ProductForm;
