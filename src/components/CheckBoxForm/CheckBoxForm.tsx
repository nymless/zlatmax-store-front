import React, { FC } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

interface CheckBoxFormProps {
  list?: { id: number; name: string }[];
}

const CheckBoxForm: FC<CheckBoxFormProps> = (props) => (
  <FormGroup>
    {props.list?.map((item) => {
      return (
        <FormControlLabel
          key={item.id}
          control={<Checkbox />}
          label={item.name}
        />
      );
    })}
  </FormGroup>
);

export default CheckBoxForm;
