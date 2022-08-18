import React, { FC, useRef } from 'react';
import styles from './Dropdown.module.css';
import Panel from './Panel/Panel';
import { useGetTypesQuery } from '../../redux/services/productDetailsApi';

interface Props {}

export const Dropdown: FC<Props> = (props) => {
  const types = useGetTypesQuery().data;
  const divRef = useRef<HTMLDivElement>(null);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={styles.dropdown}>
      <div className={styles.menu} ref={divRef}>
        {types &&
          types.map((type) => {
            return (
              <button
                key={type.id}
                className={styles.button}
                onClick={handleClickOpen}
              >
                {type.name}
              </button>
            );
          })}
      </div>
      <div>
        <Panel open={open} onClose={handleClose} divRef={divRef} />
      </div>
    </div>
  );
};
