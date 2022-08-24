import React, { FC } from 'react';
import styles from './SubscriptionForm.module.css';
import { Checkbox } from './MuiStyled/CheckBox';
import { TextField } from './MuiStyled/TextField';
import Grid from '@mui/material/Grid';
import arrow from './arrow.svg';
import { Button } from './MuiStyled/Button';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { AppRouts } from '../../../variables/AppRouts';

interface SubscriptionFormProps {}

const SubscriptionForm: FC<SubscriptionFormProps> = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      accepted: false,
    },
    onSubmit: (values, actions) => {
      console.log(values);
      alert(JSON.stringify(values, null, 2));
      actions.setSubmitting(false);
    },
  });

  return (
    <div className={styles.SubscriptionForm}>
      <form onSubmit={formik.handleSubmit}>
        <Grid container sx={{ gap: '16px' }}>
          <Grid item sx={{ flex: '1 1 auto' }}>
            <Grid container>
              <Grid item sx={{ flex: '1 1 auto' }}>
                <TextField
                  fullWidth
                  label="Enter your email"
                  placeholder="example@gmail.com"
                  name="email"
                  type="email"
                  required={true}
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
              </Grid>
              <Grid item sx={{ flex: '0 0 auto', position: 'relative' }}>
                <Button type="submit" variant="contained">
                  <img src={arrow} alt="Send email" />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sx={{ flex: '1 1 auto' }}>
            <Grid container sx={{ flexWrap: 'nowrap', gap: '5px' }}>
              <Grid item sx={{ flex: '0 1 auto' }}>
                <Checkbox
                  name="accepted"
                  value={formik.values.accepted}
                  onChange={formik.handleChange}
                  required={true}
                />
              </Grid>
              <Grid item sx={{ flex: '0 1 auto' }}>
                <div className={styles.terms}>
                  {'Я прочитал Условия соглашения и\nсогласен с '}
                  <Link className={styles.link} to={AppRouts.TERMS}>
                    условиями
                  </Link>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default SubscriptionForm;
