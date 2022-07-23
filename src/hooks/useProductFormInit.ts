import { ProductModelForProductPage } from '../redux/services/types';

export interface ProductFormValues {
  bladeId: number;
  handleId: number;
  handguardId: number;
  maintenanceId: number | string;
}

export const useProductFormInit = (product: ProductModelForProductPage) => {
  const initialValues = {
    bladeId: product.defaultBladeId,
    handleId: product.defaultHandleId,
    handguardId: product.defaultHandguardId,
    maintenanceId: '',
  };

  const handleSubmit = (values: any, actions: any) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      actions.setSubmitting(false);
    }, 1000);
  };

  return {
    initialValues,
    handleSubmit,
  };
};
