import React, { FC } from 'react';
import styles from '../DataTabs.module.css';
import { ProductModelForProductPage } from '../../../redux/services/types';

interface DescriptionProps {
  product: ProductModelForProductPage;
}

const Description: FC<DescriptionProps> = (props) => (
  <div>
    {props.product.info.map((info) => {
      return (
        <div>
          {info.title && (
            <div
              dangerouslySetInnerHTML={{
                __html: `<h3>${info.title}</h3>\n`,
              }}
            />
          )}
          <div
            className={styles.panelChild}
            dangerouslySetInnerHTML={{
              __html: `<div class='zlatmax-product-description'>${info.description}</div>`,
            }}
          />
        </div>
      );
    })}
  </div>
);

export default Description;
