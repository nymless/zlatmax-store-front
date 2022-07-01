import React, { FC } from 'react';
import FormControl from '@mui/material/FormControl';
import { FormControlLabel } from './Styled/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import { Radio } from './Styled/Radio';

interface RadioFormProps {
  list?: { id: number; name: string }[];
}

const RadioForm: FC<RadioFormProps> = (props) => (
  <FormControl>
    <RadioGroup
      aria-labelledby="radio-buttons-group-label"
      name="radio-buttons-group"
    >
      {props.list?.map((item) => {
        return (
          <FormControlLabel
            key={item.id}
            value={item.name}
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

export default RadioForm;
