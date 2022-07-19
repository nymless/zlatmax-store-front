export const useProductFormInit = () => {
  const initialValues = {
    blade: '',
    handle: '',
    handguard: '',
    maintenance: '',
  };

  const handleSubmit = (values: any, actions: any) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      actions.setSubmitting(false);
    }, 1000);
  };

  return {
    initialValues,
    handleSubmit,
  };
};
