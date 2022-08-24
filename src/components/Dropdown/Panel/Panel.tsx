import React, { FC } from 'react';
import styles from './Panel.module.css';
import { Menu } from './Menu/Menu';
import {
  useGetBrandsQuery,
  useGetCategoriesQuery,
} from '../../../redux/api/productDetailsApi';
import { useGetBladeMaterialsQuery } from '../../../redux/api/knifeMaterialsApi';
import { shortenedArray } from '../../../utils/shortenedArray';
import MuiDialog from '@mui/material/Dialog';
import { styled } from '@mui/material/styles';
import { AppContainer } from '../../../shared/AppContainer/AppContainer';

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
      PaperComponent={() => {
        return (
          <AppContainer>
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
          </AppContainer>
        );
      }}
    ></Dialog>
  );
};

export default Panel;
