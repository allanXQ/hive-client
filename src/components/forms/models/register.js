import CreateForm from "../../../utils/createForm";

const registerModel = {
  name: "Sign Up",
  endpoint: "auth/register",
  method: "post",

  fields: [
    {
      name: "username",
      type: "text",
      label: "Username",
      placeholder: "Enter your username",
      required: true,
    },
    {
      name: "email",
      type: "email",
      label: "Email",
      placeholder: "Enter your email",
      required: true,
    },
    {
      name: "phone",
      type: "number",
      label: "Phone",
      placeholder: "2547...",
      required: true,
    },
    {
      name: "password",
      type: "password",
      label: "Password",
      placeholder: "Enter your password",
      required: true,
    },
    {
      name: "confirmPassword",
      type: "password",
      label: "Confirm Password",
      placeholder: "Confirm your password",
      required: true,
    },
  ],
};

const RegisterForm = () => {
  return CreateForm("Sign Up", registerModel);
};

export default RegisterForm;
