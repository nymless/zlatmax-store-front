import React, { FC } from "react";
import s from "./SelectorCard.module.css";
import { Link } from "react-router-dom";
import { AppPaths } from "../../paths/AppPaths";

type Props = {
  name: string;
  img: string;
  id: number;
  onClickHandler: (id: number) => void;
};

export const SelectorCard: FC<Props> = (props) => {
  return (
    <Link
      className={s.card}
      to={"/product"}
      onClick={() => props.onClickHandler(props.id)}
    >
      <img
        className={s.img}
        src={AppPaths.STATIC_URL + props.img}
        alt={"Изображение " + props.name}
      />
      <div className={s.name}>{props.name}</div>
    </Link>
  );
};
