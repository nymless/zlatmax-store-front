import React, { FC, useEffect } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import { Slider } from './Styled/Slider';
import { Input } from './Styled/Input';
import { FormikHelpers, FormikValues } from 'formik';

function valuetext(value: number) {
  return `${value} рублей`;
}

interface SliderFormProps {
  min: number;
  step: number;
  max: number;
  values: FormikValues;
  setFieldValue: FormikHelpers<FormikValues>['setFieldValue'];
  field: string;
}

const SliderForm: FC<SliderFormProps> = ({
  min,
  step,
  max,
  setFieldValue,
  field,
}) => {
  const [value, setValue] = React.useState<Array<number | string>>([min, max]);

  useEffect(() => {
    setFieldValue(field, value.join('-'));
  }, [setFieldValue, value, field]);

  useEffect(() => {
    setValue([min, max]);
  }, [min, max]);

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  const handleInputChange = (flag: 'left' | 'right') => {
    return (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = [...value];
      const index = flag === 'left' ? 0 : 1;
      newValue[index] =
        event.target.value === '' ? '' : Number(event.target.value);
      setValue(newValue);
    };
  };

  const handleBlur = () => {
    const newValue = value.map((n) => {
      if (n < min) return min;
      if (n > max) return max;
      return n;
    });
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stack spacing={2}>
        <Grid container>
          <Grid item sx={{ flex: '1 1 auto' }}>
            <Input
              sx={{ width: '100%' }}
              value={value[0]}
              size="small"
              onChange={handleInputChange('left')}
              onBlur={handleBlur}
              inputProps={{
                step,
                min,
                max,
                type: 'number',
                'aria-labelledby': 'input-slider',
              }}
            />
          </Grid>
          <Grid item sx={{ flex: '1 1 auto' }}>
            <Input
              sx={{ width: '100%' }}
              value={value[1]}
              size="small"
              onChange={handleInputChange('right')}
              onBlur={handleBlur}
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
          min={min}
          step={step}
          max={max}
          value={value as number[]}
          onChange={handleSliderChange}
          valueLabelDisplay="auto"
          getAriaLabel={() => 'Диапазон цен'}
          getAriaValueText={valuetext}
        />
      </Stack>
    </Box>
  );
};

export default SliderForm;
