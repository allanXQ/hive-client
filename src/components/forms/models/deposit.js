import CreateForm from "../components/createForm";

const DepositModel = {
  name: "Deposit",
  endpoint: "user/transact/mpesa/deposit",
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
      placeholder: "min 10",
      required: true,
    },
  ],
};

const DepositForm = () => {
  return CreateForm(DepositModel);
};

export default DepositForm;
