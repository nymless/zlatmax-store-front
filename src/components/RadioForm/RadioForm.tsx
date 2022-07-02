import React, { FC, ReactNode } from 'react';
import FormControl from '@mui/material/FormControl';
import { FormControlLabel } from './Styled/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import { Radio } from './Styled/Radio';
import { FormikHelpers, FormikValues } from 'formik';

interface RadioFormProps {
  list?: { id: number; name: string | ReactNode }[];
  values: FormikValues;
  setFieldValue: FormikHelpers<FormikValues>['setFieldValue'];
  field: string;
}

const RadioForm: FC<RadioFormProps> = (props) => {
  return (
    <FormControl>
      <RadioGroup
        aria-labelledby="radio-buttons-group-label"
        name={props.field}
        value={props.values[props.field].toString()}
        onChange={(event) => {
          props.setFieldValue(props.field, event.currentTarget.value);
        }}
      >
        {props.list?.map((item) => {
          return (
            <FormControlLabel
              key={item.id}
              value={item.id}
              label={item.name}
              control={
                <Radio
                  icon={<div className="outer"></div>}
                  checkedIcon={
                    <div className="outer">
                      <div className="inner"></div>
                    </div>
                  }
                />
              }
            />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
};

export default RadioForm;
