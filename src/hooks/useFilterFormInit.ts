import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { FormikValues } from 'formik';
import { filterTruthy } from '../utils/filterTruthy';
import { AppSearchParams } from '../variables/AppSearchParams';

export interface ProductFilterFormValues {
  typeId: string;
  price: string;
  categoryId: string;
  brandId: string;
  bladeMaterialId: string;
  handleMaterialId: string;
  handguardMaterialId: string;
  gildingTypeId: string;
  totalLength: string;
  bladeLength: string;
  bladeWidth: string;
  rating: string;

  [key: string]: string;
}

export const useFilterFormInit = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const typeId = useSelector((state: RootState) => state.selectState.typeId);
  const categoryId = useSelector((state: RootState) => state.selectState.categoryId);
  const brandId = useSelector((state: RootState) => state.selectState.brandId);
  const bladeMaterialId = useSelector(
    (state: RootState) => state.selectState.bladeMaterialId
  );

  const typeIdFromSelectStore = typeId ? typeId.toString() : null;
  const categoryIdFromSelectStore = categoryId ? categoryId.toString() : null;
  const brandIdFromSelectStore = brandId ? brandId.toString() : null;
  const bladeMaterialIdFromSelectStore = bladeMaterialId
    ? bladeMaterialId.toString()
    : null;

  const typeIdFromSearchParams = searchParams.get(AppSearchParams.TYPE_ID);
  const priceFromSearchParams = searchParams.get(AppSearchParams.PRICE);
  const categoryIdFromSearchParams = searchParams.get(
    AppSearchParams.CATEGORY_ID
  );
  const brandIdFromSearchParams = searchParams.get(AppSearchParams.BRAND_ID);
  const bladeMaterialIdFromSearchParams = searchParams.get(
    AppSearchParams.BLADE_MATERIAL_ID
  );
  const handleMaterialIdFromSearchParams = searchParams.get(
    AppSearchParams.HANDLE_MATERIAL_ID
  );
  const handguardMaterialIdFromSearchParams = searchParams.get(
    AppSearchParams.HANDGUARD_MATERIAL_ID
  );
  const gildingTypeIdFromSearchParams = searchParams.get(
    AppSearchParams.GILDING_TYPE_ID
  );
  const totalLengthFromSearchParams = searchParams.get(
    AppSearchParams.TOTAL_LENGTH
  );
  const bladeLengthFromSearchParams = searchParams.get(
    AppSearchParams.BLADE_LENGTH
  );
  const bladeWidthFromSearchParams = searchParams.get(
    AppSearchParams.BLADE_WIDTH
  );
  const ratingFromSearchParams = searchParams.get(AppSearchParams.RATING);

  const initialFormValues: ProductFilterFormValues = {
    typeId: typeIdFromSearchParams || typeIdFromSelectStore || '',
    price: priceFromSearchParams || '',
    categoryId: categoryIdFromSearchParams || categoryIdFromSelectStore || '',
    brandId: brandIdFromSearchParams || brandIdFromSelectStore || '',
    bladeMaterialId:
      bladeMaterialIdFromSearchParams || bladeMaterialIdFromSelectStore || '',
    handleMaterialId: handleMaterialIdFromSearchParams || '',
    handguardMaterialId: handguardMaterialIdFromSearchParams || '',
    gildingTypeId: gildingTypeIdFromSearchParams || '',
    totalLength: totalLengthFromSearchParams || '',
    bladeLength: bladeLengthFromSearchParams || '',
    bladeWidth: bladeWidthFromSearchParams || '',
    rating: ratingFromSearchParams || '',
  };

  const handleSubmitForm = (values: FormikValues) => {
    // TODO: truthy values '' ?
    const getParams = filterTruthy(values);
    setSearchParams(getParams);
  };

  const isCategorySelected = Boolean(categoryIdFromSelectStore);
  const isBrandSelected = Boolean(brandIdFromSelectStore);
  const isMaterialSelected = Boolean(bladeMaterialIdFromSelectStore);

  return {
    isCategorySelected,
    isBrandSelected,
    isMaterialSelected,
    initialFormValues,
    handleSubmitForm,
  };
};
