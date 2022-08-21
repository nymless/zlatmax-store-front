import React, { FC } from 'react';
import { Part } from '../../../../hooks/useProductFormLists';

interface ListItemProps {
  part: Part;
  currentPrice: number;
  discountMultiplier: number;
}

const AppListItem: FC<ListItemProps> = (props) => {
  const priceDiff =
    (props.currentPrice - props.part.partPrice) * props.discountMultiplier;

  if (priceDiff === 0) {
    return <>{`${props.part.partMaterialName}`}</>;
  }

  const priceDiffString =
    priceDiff < 0 ? `+${Math.abs(priceDiff)}` : `-${priceDiff}`;

  return <>{`${props.part.partMaterialName} (${priceDiffString} руб)`}</>;
};

export default AppListItem;
