import React, { FC } from "react";
import { ProductModelForProductPage } from "../../redux/types";
import styles from "./Product.module.css";

interface ProductProps {
  product: ProductModelForProductPage;
}

const Product: FC<ProductProps> = (props) => {
  return <div className={styles.Product}>Product Component</div>;
};

export default Product;
