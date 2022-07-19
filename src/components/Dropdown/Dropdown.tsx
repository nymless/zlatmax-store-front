import React, { FC, useState } from 'react';
import s from './Dropdown.module.css';
import { Panel } from './Panel/Panel';
import { useGetTypesQuery } from '../../redux/services/productDetailsApi';

interface Props {}

export const Dropdown: FC<Props> = (props) => {
  const types = useGetTypesQuery().data;
  const [dropOpened, setDropOpened] = useState(false);

  const handleDropClick = (id: number) => {
    setDropOpened((toggle) => !toggle);
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
      {dropOpened && <Panel setDropOpened={setDropOpened} />}
    </div>
  );
};
