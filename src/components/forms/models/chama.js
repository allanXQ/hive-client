import CreateForm from "../components/createForm";

const CreateChamaModel = {
  name: "CreateChama",
  endpoint: "chama/create",
  method: "post",
  isStepper: true,
  button: "Create",

  fields: [
    {
      name: "name",
      type: "text",
      label: "Name",
      placeholder: "Name",
      required: true,
    },
    {
      name: "type",
      type: "select",
      label: "Type",
      options: [{ value: "test" }, { value: "test2" }],
      required: true,
    },
    {
      header: "Contributions",
    },
    {
      name: "Period",
      type: "select",
      label: "Period",
      options: [{ value: "test" }, { value: "test2" }],
      required: true,
    },
    {
      name: "Amount",
      type: "number",
      label: "Amount",
      placeholder: "Amount",
      required: true,
    },
    {
      name: "Due Date",
      type: "date",
      label: "Due Date",
      placeholder: "Due Date",
      required: true,
    },
    {
      name: "Penalty",
      type: "number",
      label: "Penalty",
      placeholder: "Penalty",
      required: true,
    },
    {
      name: "PenaltyDueDate",
      type: "date",
      label: "Penalty Due Date",
      placeholder: "Penalty Due Date",
      required: true,
    },
  ],
};

const CreateChamaForm = () => {
  return CreateForm(CreateChamaModel);
};

export default CreateChamaForm;
