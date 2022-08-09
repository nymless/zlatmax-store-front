import React, { FC, useEffect } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import { Slider } from './MuiStyled/Slider';
import { Input } from './MuiStyled/Input';
import { FormikHelpers, FormikValues } from 'formik';

interface SliderFormProps {
  min: number;
  step: number;
  max: number;
  values: FormikValues;
  setFieldValue: FormikHelpers<FormikValues>['setFieldValue'];
  submitForm: FormikHelpers<FormikValues>['submitForm'];
  name: string;
}

const SliderForm: FC<SliderFormProps> = React.memo((props) => {
  const { min, step, max, values, setFieldValue, submitForm, name } = props;

  const initialValues = values[name].split('-');
  const leftThumbValue = Number.parseInt(initialValues[0]) || min;
  const rightThumbValue = Number.parseInt(initialValues[1]) || max;

  const [value, setValue] = React.useState<Array<number | string>>([
    leftThumbValue,
    rightThumbValue,
  ]);

  useEffect(() => {
    const initialValues = values[name].split('-');
    const leftThumbValue = Number.parseInt(initialValues[0]) || min;
    const rightThumbValue = Number.parseInt(initialValues[1]) || max;

    setValue([leftThumbValue, rightThumbValue]);
  }, [max, min, name, values]);

  const handleSliderChange = (event: Event, newValue: number[]) => {
    setValue(newValue);
    setFieldValue(name, newValue.join('-'));
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

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      (event.target as HTMLElement).blur();
    }
  };

  const handleBlur = () => {
    const newValue = value.map((n) => {
      if (n < min) return min;
      if (n > max) return max;
      return n;
    });
    setValue(newValue);
    setFieldValue(name, newValue.join('-'));
    submitForm();
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
              onKeyDown={handleKeyPress}
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
          value={value}
          onChange={handleSliderChange}
          onChangeCommitted={submitForm}
          valueLabelDisplay="auto"
          getAriaLabel={() => 'Диапазон цен'}
          getAriaValueText={(value: number) => `${value} рублей`}
        />
      </Stack>
    </Box>
  );
});

export default SliderForm;
