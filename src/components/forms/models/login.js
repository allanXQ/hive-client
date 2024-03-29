import CreateForm from "../components/createForm";

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
  return CreateForm(loginModel, children);
};

export default LoginForm;
