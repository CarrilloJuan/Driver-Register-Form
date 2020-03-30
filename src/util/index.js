/*
  This function add validation basic, there will be changed by Formik and yup
*/

const requiredProperties = [
  'name',
  'email',
  'phone',
  'age',
  'patent',
  'model',
  'year',
];

export const validateData = data => {
  let validationsError = [];

  if (Object.entries(data).length === 0) {
    validationsError = requiredProperties;
    return validationsError;
  }

  for (const property in requiredProperties) {
    const requiredProp = requiredProperties[property];
    if (requiredProp && !data[requiredProp]) {
      validationsError.push(requiredProp);
    }
  }
  console.log({validationsError});
  return validationsError;
};

export const isError = (errors, key) =>
  errors.indexOf(key) !== -1 ? 'valor requerido' : '';
