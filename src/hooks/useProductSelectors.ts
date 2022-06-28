import { useState } from 'react';

export const useProductSelectors = () => {
  const [typeId, setTypeId] = useState(null as number | null);

  const [brandId, setBrandId] = useState(null as number | null);

  const [categoryId, setCategoryId] = useState(null as number | null);

  const [bladeMaterialId, setBladeMaterialId] = useState(null as number | null);

  const [rating, setRating] = useState(null as number | null);

  const [totalLength, setTotalLength] = useState(null as number | null);

  const [bladeLength, setBladeLength] = useState(null as number | null);

  const [bladeWidth, setBladeWidth] = useState(null as number | null);

  return {
    typeId,
    brandId,
    categoryId,
    bladeMaterialId,
    rating,
    totalLength,
    bladeLength,
    bladeWidth,
    setTypeId,
    setBrandId,
    setCategoryId,
    setBladeMaterialId,
    setRating,
    setTotalLength,
    setBladeLength,
    setBladeWidth,
  };
};

export type ProductSelectors = ReturnType<typeof useProductSelectors>;
