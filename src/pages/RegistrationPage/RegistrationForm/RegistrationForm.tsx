import React, { FC, useEffect } from 'react';
import styles from './RegistrationForm.module.scss';
import TextField from '@mui/material/TextField';
import * as yup from 'yup';
import { useFormik } from 'formik';
import Button from '../../../shared/Button/Button';
import { useRegisterUserMutation } from '../../../redux/api/authApi';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

interface RegistrationFormProps {}

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Введён не корректный email адрес')
    .required('Email адрес должен быть указан обязательно'),
  password: yup
    .string()
    .min(8, 'Пароль должен состоять из 8 символов минимум')
    .required('Пароль должен быть указан обязательно'),
  firstName: yup.string().required('Имя должено быть указано обязательно'),
  lastName: yup.string().required('Фамилия должена быть указана обязательно'),
  middleName: yup.string(),
});

export type RegistrationValues = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  middleName: string;
};

const RegistrationForm: FC<RegistrationFormProps> = (props) => {
  // todo: error toast to user
  const [registerUser, { isLoading, error, isSuccess }] =
    useRegisterUserMutation();

  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      toast.success('Вы успешно зарегистрировались.', {
        position: 'bottom-right',
      });
      navigate('/login');
    }
  }, [isLoading]);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      middleName: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, actions) => {
      registerUser(values);
      actions.resetForm();
    },
  });

  return (
    <form
      className={styles.RegistrationForm}
      onSubmit={formik.handleSubmit}
      data-testid="RegistrationForm"
    >
      <TextField
        fullWidth
        id="email"
        name="email"
        label="Email *"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <TextField
        fullWidth
        id="password"
        name="password"
        label="Пароль *"
        type="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />
      <TextField
        fullWidth
        id="firstName"
        name="firstName"
        label="Имя *"
        type="firstName"
        value={formik.values.firstName}
        onChange={formik.handleChange}
        error={formik.touched.firstName && Boolean(formik.errors.firstName)}
        helperText={formik.touched.firstName && formik.errors.firstName}
      />
      <TextField
        fullWidth
        id="lastName"
        name="lastName"
        label="Фамилия *"
        type="lastName"
        value={formik.values.lastName}
        onChange={formik.handleChange}
        error={formik.touched.lastName && Boolean(formik.errors.lastName)}
        helperText={formik.touched.lastName && formik.errors.lastName}
      />
      <TextField
        fullWidth
        id="middleName"
        name="middleName"
        label="Отчество"
        type="middleName"
        value={formik.values.middleName}
        onChange={formik.handleChange}
        error={formik.touched.middleName && Boolean(formik.errors.middleName)}
        helperText={formik.touched.middleName && formik.errors.middleName}
      />
      <Button submitForm={true}>Подтвердить</Button>
    </form>
  );
};

export default RegistrationForm;
