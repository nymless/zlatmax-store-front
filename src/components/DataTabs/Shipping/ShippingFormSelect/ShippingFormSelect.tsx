import React, { FC, useState } from 'react';
import FormControl from '@mui/material/FormControl';
import { Select } from './MuiStyled/Select';
import { InputLabel } from './MuiStyled/InputLabel';
import { MenuItem } from './MuiStyled/MenuItem';
import SelectFormButton, {
  muiSelectIconProps,
} from '../../../SelectFormButton/SelectFormButton';

interface ShippingFormProps {
  initialValue: number | '';
  handleChange: (event: React.ChangeEvent<any>) => void;
  submitForm: (() => Promise<void>) & (() => Promise<any>);
  list?: { id: number; name: string }[];
  name: string;
  label: string;
}

const ShippingFormSelect: FC<ShippingFormProps> = (props) => {
  const [value, setValue] = useState(props.initialValue);
  const handleChange = (event: React.ChangeEvent<any>) => {
    setValue(event.target.value);
    props.handleChange(event);
    props.submitForm().then(() => {});
  };

  return (
    <FormControl sx={{ minWidth: 120 }} size="small" fullWidth>
      <InputLabel id={props.name}>{props.label}</InputLabel>
      {props.list && (
        <Select
          IconComponent={(muiProps: muiSelectIconProps) => (
            <SelectFormButton muiProps={muiProps} />
          )}
          id={props.name}
          name={props.name}
          label={props.label}
          value={value}
          onChange={handleChange}
          MenuProps={{
            disableScrollLock: true,
          }}
        >
          {props.list.map((item) => (
            <MenuItem key={item.id} value={item.id}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      )}
    </FormControl>
  );
};

export default ShippingFormSelect;
