import CreateForm from "../components/createForm";

const ForgotPasswordModel = {
  name: "Forgot Password",
  endpoint: "auth/forgot-password",
  method: "post",
  button: "Submit",

  fields: [
    {
      name: "email",
      type: "email",
      label: "Email",
      placeholder: "Enter your email",
      required: true,
    },
  ],
};

const ForgotPasswordForm = () => {
  return CreateForm(ForgotPasswordModel);
};

export default ForgotPasswordForm;
