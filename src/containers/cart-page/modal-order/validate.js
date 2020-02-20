const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = "Required";
  } else if (values.name.length > 40) {
    errors.name = "Must be 40 characters or less";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.phone_number) {
    errors.phone_number = "Required";
  } else if (isNaN(Number(values.phone_number))) {
    errors.phone_number = "Must be a number";
  } else if (+values.phone_number.length < 6) {
    errors.phone_number = "minimal length of number is 6!";
  }
  if (!values.address) {
    errors.address = "Required";
  }
  return errors;
};

export default validate;
