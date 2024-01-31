import * as Yup from "yup";

const getValidationSchema = (fields) => {
  let schema = {};

  fields.forEach((field) => {
    let validator;

    switch (field.type) {
      case "email":
        validator = Yup.string().email("Invalid email format");
        break;
      case "password":
        validator = Yup.string()
          .min(8, "Password must be at least 8 characters")
          .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
            "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
          );
        break;
      case "number":
        validator = Yup.number().typeError("Must be a number");
        break;
      case "text":
      default:
        validator = Yup.string();
        break;
    }

    switch (field.name) {
      case "confirmPassword":
        validator = validator.oneOf(
          [Yup.ref("password"), null],
          "Passwords must match"
        );
        break;
      case "phone":
        validator = Yup.string().matches(
          /^(2547|2541)\d{8}$/,
          "Invalid Phone Number"
        );
        break;

      case "amount":
        validator = validator.min(1, "Minimum amount is 100");
        break;

      default:
        break;
    }

    if (field.required) {
      validator = validator.required("This field is required");
    }

    schema[field.name] = validator;
  });

  return Yup.object().shape(schema);
};

export default getValidationSchema;
