import React, { FC, useEffect } from 'react';
import styles from './LoginForm.module.scss';
import TextField from '@mui/material/TextField';
import * as yup from 'yup';
import { useFormik } from 'formik';
import Button from '../../../shared/Button/Button';
import { useLoginUserMutation } from '../../../redux/api/authApi';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

interface LoginFormProps {}

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Введён не корректный email адрес')
    .required('Email адрес должен быть указан обязательно'),
  password: yup
    .string()
    .min(8, 'Пароль должен состоять из 8 символов минимум')
    .required('Пароль должен быть указан обязательно'),
});

export type LoginValues = {
  email: string;
  password: string;
};

const LoginForm: FC<LoginFormProps> = () => {
  const [loginUser, { isLoading, error, isSuccess }] = useLoginUserMutation();

  const formik = useFormik({
    initialValues: {
      email: 'ivanov@email.com',
      password: 'XsLnZj5f',
    },
    validationSchema: validationSchema,
    onSubmit: (values, actions) => {
      loginUser(values);
      actions.resetForm();
    },
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      toast.success('Вы успешно авторизовались.', {
        position: 'bottom-right',
      });
      navigate('/');
    }
    if (error) {
      if ('status' in error) {
        let message = '';
        if ('error' in error) {
          message = error.error;
        } else {
          // @ts-ignore
          if ('error' in error.data) {
            // @ts-ignore
            message = error.data.error;
          } else {
            message = 'Произошла ошибка авторизации.';
          }
        }
        toast.error(message, {
          position: 'bottom-right',
        });
      } else {
        const message = error.message
          ? error.message
          : 'Произошла ошибка авторизации.';
        toast.error(message, {
          position: 'bottom-right',
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  return (
    <form
      className={styles.LoginForm}
      onSubmit={formik.handleSubmit}
      data-testid="LoginForm"
    >
      <TextField
        fullWidth
        id="email"
        name="email"
        label="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <TextField
        fullWidth
        id="password"
        name="password"
        label="Пароль"
        type="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />
      <Button submitForm={true}>Подтвердить</Button>
    </form>
  );
};

export default LoginForm;
