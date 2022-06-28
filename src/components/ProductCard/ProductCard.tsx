import React, { FC } from "react";
import s from "./ProductCard.module.css";
import { Link } from "react-router-dom";
import { AppPaths } from "../../paths/AppPaths";

type Props = {
  name: string;
  img: string;
  productId: number;
};

export const ProductCard: FC<Props> = (props) => (
  <Link className={s.card} to={"/product/" + props.productId}>
    <img
      className={s.img}
      src={AppPaths.STATIC_URL + props.img}
      alt={"Изображение " + props.name}
    />
    <div className={s.name}>{props.name}</div>
  </Link>
);
