import React, { FC } from 'react';
import styles from './Panel.module.css';
import { Menu } from './Menu/Menu';
import {
  useGetBrandsQuery,
  useGetCategoriesQuery,
} from '../../../redux/services/productDetailsApi';
import { useGetBladeMaterialsQuery } from '../../../redux/services/knifeMaterialsApi';
import { shortenedArray } from '../../../utils/shortenedArray';
import MuiDialog from '@mui/material/Dialog';
import { styled } from '@mui/material/styles';
import { withContainer } from '../../../hoc/withContainer';

export const Dialog = styled(MuiDialog)(
  (props: { offset: number | undefined }) => `
    height: 600px;
    background-color: #141414;
    top: ${props.offset || 0}px;
  
    & .MuiBackdrop-root {
      background-color: unset;
    }
  `
);

interface Props {
  open: boolean;
  onClose: () => void;
  divRef: React.RefObject<HTMLDivElement>;
}

const Panel: FC<Props> = (props) => {
  const { onClose, open } = props;

  const categories = useGetCategoriesQuery().data;
  const brand = useGetBrandsQuery().data;
  const bladeMaterials = useGetBladeMaterialsQuery().data;

  const shortenedCategories = shortenedArray(categories);
  const shortenedBrands = shortenedArray(brand);
  const shortenedBladeMaterials = shortenedArray(bladeMaterials);

  const handleClose = () => {
    onClose();
  };

  const handleListItemClick = () => {
    onClose();
  };

  return (
    <Dialog
      offset={props.divRef.current?.getBoundingClientRect().bottom}
      className={styles.panel}
      onClose={handleClose}
      open={open}
      PaperComponent={withContainer(() => {
        return (
          <div className={styles.menu}>
            {shortenedCategories && (
              <Menu
                name="Категория ножей"
                list={shortenedCategories}
                onClickHandler={handleListItemClick}
                handleHeaderClick={handleListItemClick}
                path="/category"
              />
            )}
            {shortenedBrands && (
              <Menu
                name="Производство ножей"
                list={shortenedBrands}
                onClickHandler={handleListItemClick}
                handleHeaderClick={handleListItemClick}
                path="/brand"
                prefix="Ножи"
              />
            )}
            {shortenedBladeMaterials && (
              <Menu
                name="Ножи по маркам стали"
                list={shortenedBladeMaterials}
                onClickHandler={handleListItemClick}
                handleHeaderClick={handleListItemClick}
                path="/material"
                prefix="Ножи из стали"
              />
            )}
          </div>
        );
      })}
    ></Dialog>
  );
};

export default Panel;
