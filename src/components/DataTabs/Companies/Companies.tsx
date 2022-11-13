import React, { FC } from 'react';
import styles from './Companies.module.css';
import { useGetShippingByParamsQuery } from '../../../redux/api/shippingApi';
import { AppPaths } from '../../../variables/AppPaths';

interface CompaniesProps {
  cityId: number;
}

const Companies: FC<CompaniesProps> = (props) => {
  const { data, error, isLoading } = useGetShippingByParamsQuery({
    cityId: props.cityId,
  });

  if (isLoading) {
    return (
      <div className={styles.Companies}>
        Загрузка списка транспортных компаний.
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.Companies}>
        Невозможно получить список транспортных компаний.
      </div>
    );
  }

  if (!data?.length) {
    return (
      <div className={styles.Companies}>
        На данный момент доставка в выбранный город не производится. Приносим
        свои извинения.
      </div>
    );
  }

  // TODO: correct endings ('дней', 'дня', etc.)
  return (
    <div className={styles.Companies}>
      {data.map((company) => {
        const localizedPrice = company.price.toLocaleString('ru', {
          minimumFractionDigits: 0,
          style: 'currency',
          currency: 'RUB',
        });

        const deliveryTime =
          company.minHandlingTime + '-' + company.maxHandlingTime + ' дней';

        return (
          <div key={company.id} className={styles.companyBlock}>
            <div className={styles.company}>
              <img
                className={styles.logo}
                src={AppPaths.IMG_URL + company.img}
                alt='Logo'
              />
              <div>{company.name}</div>
            </div>
            <div className={styles.info}>
              <div>{deliveryTime}</div>
              <div className={styles.price}>{localizedPrice}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Companies;
