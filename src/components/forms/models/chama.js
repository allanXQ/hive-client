import CreateForm from "../../../utils/createForm";
import FormStepper from "../../../utils/formStepper";

const CreateChamaModel = {
  name: "CreateChama",
  endpoint: "chama/create",
  method: "post",
  isStepper: true,

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
      options: [{ text: "test", value: "test" }],
      required: true,
    },
  ],
};

const CreateChamaForm = () => {
  return CreateForm("CreateChama", CreateChamaModel);
};

export default CreateChamaForm;
