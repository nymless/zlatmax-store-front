import React, { FC } from "react";
import { ModelExtended } from "../../redux/types";
import styles from "./Product.module.css";

interface ProductProps {
  product: ModelExtended;
}

const Product: FC<ProductProps> = (props) => {
  return <div className={styles.Product}>Product Component</div>;
};

export default Product;
