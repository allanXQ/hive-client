import CreateForm from "../components/createForm";

const WithdrawalModel = {
  name: "Withdraw",
  endpoint: "user/transact/withdraw",
  method: "post",

  fields: [
    {
      name: "phone",
      type: "number",
      label: "Mpesa number",
      placeholder: "2547...",
      required: true,
    },
    {
      name: "amount",
      type: "number",
      label: "Amount",
      placeholder: "min 100",
      required: true,
    },
  ],
};

const WithdrawalForm = () => {
  return CreateForm(WithdrawalModel);
};

export default WithdrawalForm;
