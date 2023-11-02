import CreateForm from "../../../utils/createForm";
import FormStepper from "../../../utils/formStepper";

const DepositModel = {
  name: "Deposit",
  endpoint: "user/transact/mpesa/deposit",
  method: "post",
  isStepper: true,

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

const DepositForm = () => {
  return CreateForm("Deposit", DepositModel);
};

export default DepositForm;
