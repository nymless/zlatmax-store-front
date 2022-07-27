import React, { FC } from 'react';
import { ProductModelForProductPage } from '../../redux/services/types';
import Box from '@mui/material/Box';
import styles from './DataTabs.module.css';
import TabPanel from './TabPanel/TabPanel';
import './DataTabs.css';
import { Tab } from './MuiStyled/Tab';
import { Tabs } from './MuiStyled/Tabs';
import Features from './Features/Features';
import Description from './Description/Description';

function a11yProps(index: number) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
}

interface DataTabsProps {
  product: ProductModelForProductPage;
}

const DataTabs: FC<DataTabsProps> = (props) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={styles.DataTabs}>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="data tabs">
            <Tab label="Описание" {...a11yProps(0)} />
            <Tab label="Характеристика" {...a11yProps(1)} />
            <Tab label="Отзывы" {...a11yProps(2)} />
            <Tab label="Доставка" {...a11yProps(3)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Description product={props.product} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Features product={props.product} />
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3}>
          Item Four
        </TabPanel>
      </Box>
    </div>
  );
};

export default DataTabs;
