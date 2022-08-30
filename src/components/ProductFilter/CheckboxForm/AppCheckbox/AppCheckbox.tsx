import React, { FC, ReactNode, useState } from 'react';
import { Checkbox } from '../MuiStyled/Checkbox';
import { FormikHelpers } from 'formik';
import { ProductFilterFormValues } from '../../../../hooks/useFilterFormInit';

interface AppCheckboxProps {
  item: { id: number; name: string | ReactNode };
  values: ProductFilterFormValues;
  setFieldValue: FormikHelpers<ProductFilterFormValues>['setFieldValue'];
  submitForm: FormikHelpers<ProductFilterFormValues>['submitForm'];
  name: string;
}

const AppCheckbox: FC<AppCheckboxProps> = (props) => {
  const { item, values, setFieldValue, submitForm, name } = props;

  const isChecked = values[name].split(',').includes(item.id.toString());
  const [checked, setChecked] = useState(isChecked);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!checked) {
      const isEmpty = Object.is(values[name], '');
      const newValues = isEmpty
        ? event.target.value
        : values[name] + ',' + event.target.value;
      setFieldValue(name, newValues);
      setChecked(true);
    } else {
      const newValue = values[name]
        .split(',')
        .reduce((arr: string[], i) => {
          if (!Object.is(i, event.target.value)) {
            arr.push(i);
          }
          return arr;
        }, [])
        .join(',');
      setFieldValue(name, newValue);
      setChecked(false);
    }
    submitForm();
  };

  return (
    <Checkbox
      checked={checked}
      onChange={handleChange}
      value={item.id}
      icon={<div className="outer"></div>}
      checkedIcon={
        <div className="outer">
          <div className="inner"></div>
        </div>
      }
    />
  );
};

export default AppCheckbox;
