import CreateForm from "../../../utils/createForm";

const loginModel = {
  name: "Sign In",
  endpoint: "auth/login",
  method: "post",

  fields: [
    {
      name: "email",
      type: "email",
      label: "Email",
      placeholder: "Enter your email",
      required: true,
    },
    {
      name: "password",
      type: "password",
      label: "Password",
      placeholder: "Enter your password",
      required: true,
    },
  ],
};

const LoginForm = ({ children }) => {
  return CreateForm("Sign In", loginModel, children);
};

export default LoginForm;
