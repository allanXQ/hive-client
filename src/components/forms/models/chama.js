import CreateForm from "../../../utils/createForm";

const CreateChamaModel = {
  name: "CreateChama",
  endpoint: "chama/create",
  method: "post",

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
  ],
};

const CreateChamaForm = () => {
  return CreateForm("Create", CreateChamaModel);
};

export default CreateChamaForm;
