import React, { FC, useState } from 'react';
import styles from './Shipping.module.css';
import { ProductModelForProductPage } from '../../../redux/services/types';
import { Form, Formik, FormikHelpers } from 'formik';
import ShippingFormSelect from './ShippingFormSelect/ShippingFormSelect';
import { CityValue, CountryValue } from './types';
import {
  useGetCitiesByParamsQuery,
  useGetCountiesQuery,
} from '../../../redux/services/shippingApi';
import { useSearchParams } from 'react-router-dom';
import Companies from '../Companies/Companies';

interface ShippingProps {
  product: ProductModelForProductPage;
}

const Shipping: FC<ShippingProps> = () => {
  const [currentCountryId, setCurrentCountryId] = useState<number | ''>(1);
  const [currentCityId, setCurrentCityId] = useState<number | ''>('');

  const [searchParams] = useSearchParams();
  searchParams.set('countryId', currentCountryId.toString());

  const countriesList = useGetCountiesQuery().data;
  const citiesList = useGetCitiesByParamsQuery(
    Object.fromEntries(searchParams.entries())
  ).data;

  const initialCountryValue: CountryValue = {
    countryId: currentCountryId,
  };
  const initialCityValue: CityValue = {
    cityId: currentCityId,
  };

  const handleCountrySubmit = (
    values: CountryValue,
    actions: FormikHelpers<CountryValue>
  ) => {
    searchParams.set('countryId', values.countryId.toString());
    setCurrentCountryId(values.countryId);
    setCurrentCityId('');
    actions.setSubmitting(false);
  };

  const handleCitySubmit = (
    values: CityValue,
    actions: FormikHelpers<CityValue>
  ) => {
    searchParams.set('cityId', values.cityId.toString());
    setCurrentCityId(values.cityId);
    actions.setSubmitting(false);
  };

  return (
    <div className={styles.Shipping}>
      <div className={styles.forms}>
        <Formik
          initialValues={initialCountryValue}
          onSubmit={handleCountrySubmit}
        >
          {({ handleChange, submitForm }) => (
            <Form className={styles.shippingForm}>
              <span className={styles.formLabel}>Ваша страна</span>
              <ShippingFormSelect
                initialValue={initialCountryValue.countryId}
                handleChange={handleChange}
                submitForm={submitForm}
                list={countriesList}
                name="countryId"
                label="Выбрать страну"
              />
            </Form>
          )}
        </Formik>
        <Formik initialValues={initialCityValue} onSubmit={handleCitySubmit}>
          {({ handleChange, submitForm }) => (
            <Form className={styles.shippingForm}>
              <span className={styles.formLabel}>Ваш город</span>
              <ShippingFormSelect
                initialValue={initialCityValue.cityId}
                handleChange={handleChange}
                submitForm={submitForm}
                list={citiesList}
                name="cityId"
                label="Выбрать город"
              />
            </Form>
          )}
        </Formik>
      </div>
      {currentCityId && <Companies cityId={currentCityId} />}
    </div>
  );
};

export default Shipping;
