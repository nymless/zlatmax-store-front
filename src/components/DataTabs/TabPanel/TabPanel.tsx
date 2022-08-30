import React, { FC } from 'react';
import Box from '@mui/material/Box';
import styles from './TabPanel.module.css';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel: FC<TabPanelProps> = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      className={styles.TabPanel}
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ pt: 4.4 }}>{children}</Box>}
    </div>
  );
};

export default TabPanel;
