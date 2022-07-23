import React, { FC, PropsWithChildren, useState } from 'react';
import FormControl from '@mui/material/FormControl';
import { Select } from './MuiStyled/Select';
import { FormikHandlers } from 'formik';
import { InputLabel } from './MuiStyled/InputLabel';
import { MenuItem } from './MuiStyled/MenuItem';
import { Part } from '../../hooks/useProductFormLists';

interface SelectFormProps {
  name: string;
  label: string;
  partsList?: Part[];
  handleChange: FormikHandlers['handleChange'];
  currentPartPrice: number;
  initialValue: number | '';
  render: (part: Part) => JSX.Element;
}

const SelectForm: FC<PropsWithChildren<SelectFormProps>> = (props) => {
  const [value, setValue] = useState(props.initialValue);
  const handleChange = (event: React.ChangeEvent<any>) => {
    setValue(event.target.value);
    props.handleChange(event);
  };

  return (
    <FormControl sx={{ minWidth: 120 }} size="small" fullWidth>
      <InputLabel id={props.name}>{props.label}</InputLabel>
      {props.partsList && (
        <Select
          id={props.name}
          name={props.name}
          label={props.label}
          value={value}
          onChange={handleChange}
          MenuProps={{
            disableScrollLock: true,
          }}
        >
          {props.children}
          {props.partsList.map((part) => (
            <MenuItem key={part.partId} value={part.partId}>
              {props.render(part)}
            </MenuItem>
          ))}
        </Select>
      )}
    </FormControl>
  );
};

export default SelectForm;
