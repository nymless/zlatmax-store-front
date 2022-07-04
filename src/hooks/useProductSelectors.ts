import { useState } from 'react';

export const useProductSelectors = () => {
  const [typeId, setTypeId] = useState(null as number | null);

  const [brandId, setBrandId] = useState(null as number | null);

  const [categoryId, setCategoryId] = useState(null as number | null);

  const [bladeMaterialId, setBladeMaterialId] = useState(null as number | null);

  return {
    typeId,
    brandId,
    categoryId,
    bladeMaterialId,
    setTypeId,
    setBrandId,
    setCategoryId,
    setBladeMaterialId,
  };
};

export type ProductSelectors = ReturnType<typeof useProductSelectors>;
