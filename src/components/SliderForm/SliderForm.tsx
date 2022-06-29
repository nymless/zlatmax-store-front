import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Stack from '@mui/material/Stack';
import Input from '@mui/material/Input';
import Grid from '@mui/material/Grid';

function valuetext(value: number) {
  return `${value} рублей`;
}

interface SliderFormProps {
  min: number;
  step: number;
  max: number;
  from: number;
  to: number;
}

const SliderForm: FC<SliderFormProps> = ({ min, step, max, from, to }) => {
  const [value, setValue] = React.useState<number[]>([from, to]);

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  const handleLeftInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newValue = value;
    newValue[0] = Number(event.target.value);
    setValue(newValue);
  };

  const handleRightInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newValue = value;
    newValue[1] = Number(event.target.value);
    setValue(newValue);
  };

  const handleBlur = (value: number) => {
    if (value < from) {
      setValue([from, to]);
    } else if (value > to) {
      setValue([from, to]);
    }
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stack spacing={2}>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Input
              value={value[0]}
              size="small"
              onChange={handleLeftInputChange}
              onBlur={() => handleBlur(value[0])}
              inputProps={{
                step,
                min,
                max,
                type: 'number',
                'aria-labelledby': 'input-slider',
              }}
            />
          </Grid>
          <Grid item>
            <Input
              value={value[1]}
              size="small"
              onChange={handleRightInputChange}
              onBlur={() => handleBlur(value[1])}
              inputProps={{
                step,
                min,
                max,
                type: 'number',
                'aria-labelledby': 'input-slider',
              }}
            />
          </Grid>
        </Grid>

        <Slider
          value={value}
          min={min}
          step={step}
          max={max}
          getAriaLabel={() => 'Диапазон цен'}
          onChange={handleSliderChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
        />
      </Stack>
    </Box>
  );
};

export default SliderForm;
