import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value: number) {
  return `${value} рублей`;
}

interface SliderFormProps {
  range: [number, number];
}

const SliderForm: FC<SliderFormProps> = (props) => {
  const [value, setValue] = React.useState<number[]>([
    props.range[0],
    props.range[1],
  ]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        getAriaLabel={() => 'Диапазон цен'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
    </Box>
  );
};

export default SliderForm;
