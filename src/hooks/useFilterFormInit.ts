import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { FormikValues } from 'formik';
import { filterTruthy } from '../utils/filterTruthy';

export const useFilterFormInit = () => {
  const [, setSearchParams] = useSearchParams();

  const selectedTypeId = useSelector(
    (state: RootState) => state.selected.typeId
  );
  const selectedCategoryId = useSelector(
    (state: RootState) => state.selected.categoryId
  );
  const selectedBrandId = useSelector(
    (state: RootState) => state.selected.brandId
  );
  const selectedBladeMaterialId = useSelector(
    (state: RootState) => state.selected.bladeMaterialId
  );

  const initialFormValues = {
    typeId: selectedTypeId || '',
    price: '',
    categoryId: selectedCategoryId || '',
    brandId: selectedBrandId || '',
    bladeMaterialId: selectedBladeMaterialId || '',
    handleMaterialId: '',
    handguardMaterialId: '',
    gildingTypeId: '',
    totalLength: '',
    bladeLength: '',
    bladeWidth: '',
    rating: '',
  };

  const handleSubmitForm = (values: FormikValues) => {
    const getParams = filterTruthy(values);
    setSearchParams(getParams);
  };

  const isCategorySelected = Boolean(selectedCategoryId);
  const isBrandSelected = Boolean(selectedBrandId);
  const isMaterialSelected = Boolean(selectedBladeMaterialId);

  return {
    isCategorySelected,
    isBrandSelected,
    isMaterialSelected,
    initialFormValues,
    handleSubmitForm,
  };
};
