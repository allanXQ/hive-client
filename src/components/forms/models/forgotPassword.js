import CreateForm from "../../../utils/createForm";

const ForgotPasswordModel = {
  name: "Forgot Password",
  endpoint: "auth/forgot-password",
  method: "post",

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
  return CreateForm("ForgotPassword", ForgotPasswordModel);
};

export default ForgotPasswordForm;
