import React, { FC, ReactNode } from 'react';
import FormControl from '@mui/material/FormControl';
import { FormControlLabel } from './MuiStyled/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import { FormikHelpers } from 'formik';
import AppCheckbox from './AppCheckbox/AppCheckbox';
import { ProductFilterFormValues } from '../../../hooks/useFilterFormInit';

interface CheckboxFormProps {
  list?: { id: number; name: string | ReactNode }[];
  values: ProductFilterFormValues;
  setFieldValue: FormikHelpers<ProductFilterFormValues>['setFieldValue'];
  submitForm: FormikHelpers<ProductFilterFormValues>['submitForm'];
  name: string;
}

const CheckboxForm: FC<CheckboxFormProps> = (props) => {
  const { list, values, setFieldValue, submitForm, name } = props;

  return (
    <FormControl>
      <FormGroup>
        {list?.map((item) => {
          return (
            <FormControlLabel
              key={item.id}
              label={item.name}
              control={
                <AppCheckbox
                  item={item}
                  values={values}
                  setFieldValue={setFieldValue}
                  submitForm={submitForm}
                  name={name}
                />
              }
            />
          );
        })}
      </FormGroup>
    </FormControl>
  );
};

export default CheckboxForm;
