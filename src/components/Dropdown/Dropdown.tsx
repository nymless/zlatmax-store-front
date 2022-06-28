import React, { FC, useState } from 'react';
import s from './Dropdown.module.css';
import { Panel } from './Panel/Panel';
import { ProductSelectors } from '../../hooks/useProductSelectors';
import { useGetTypesQuery } from '../../redux/services/productsApi';

interface Props {
  selectors: ProductSelectors;
}

export const Dropdown: FC<Props> = (props) => {
  const types = useGetTypesQuery().data;
  const [dropOpened, setDropOpened] = useState(false);

  const handleDropClick = (id: number) => {
    setDropOpened((toggle) => !toggle);
    props.selectors.setTypeId(id);
  };

  return (
    <div className={s.dropdown}>
      <div className={s.menu}>
        {types &&
          types.map((type) => {
            return (
              <button
                key={type.id}
                className={s.button}
                onClick={() => handleDropClick(type.id)}
              >
                {type.name}
              </button>
            );
          })}
      </div>
      {dropOpened && (
        <Panel selectors={props.selectors} setDropOpened={setDropOpened} />
      )}
    </div>
  );
};
