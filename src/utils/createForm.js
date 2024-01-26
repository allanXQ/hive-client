import { Form, Formik } from "formik";

import MUITextField from "../components/forms/inputs/textField";
import { Box } from "@mui/material";
import getValidationSchema from "./getValidationSchema";
import { useDispatch, useSelector } from "react-redux";
import { apiCall } from "redux/async/asyncThunk";
import { MuiButton } from "components/common/Button";
import { selectUser } from "redux/features/user/userSlice";
import MUISelectField from "components/forms/inputs/select";

const CenteredBox = (props) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 2,
      ...props.sx,
    }}
    {...props}
  />
);

const FIELD_COMPONENTS = {
  email: MUITextField,
  password: MUITextField,
  text: MUITextField,
  number: MUITextField,
  select: MUISelectField,
  file: "input",
};

const getInitialValues = (fields) => {
  return fields?.reduce((values, field) => {
    values[field.name] = field.value || "";
    return values;
  }, {});
};

const CreateForm = (formName, model, children, activeAsset) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const fields = model.fields;
  return (
    <CenteredBox key={activeAsset}>
      <Formik
        initialValues={getInitialValues(fields)}
        validationSchema={getValidationSchema(fields)}
        onSubmit={(values, { setSubmitting }) => {
          values.userId = user.userId;
          dispatch(
            apiCall({
              endpoint: model.endpoint,
              method: model.method,
              data: values,
              slice: "userData",
            })
          );
          setSubmitting(false);
        }}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <CenteredBox
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 2,
              }}
            >
              <CenteredBox
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 3,
                }}
              >
                {fields.map((field, index) => {
                  if (field.header)
                    return (
                      <Box
                        sx={
                          {
                            // display: "flex",
                            // flexDirection: "column",
                            // alignItems: "center",
                            // justifyContent: "center",
                            // gap: 2,
                            // width: "100%",
                            // textAlign: "center",
                            // fontSize: "1.5rem",
                            // fontWeight: 700,
                            // color: "white.main",
                            // ...model.headerSx,
                          }
                        }
                      >
                        {field.header}
                      </Box>
                    );
                  const InputComponent = FIELD_COMPONENTS[field.type];
                  if (InputComponent) {
                    return (
                      <InputComponent
                        key={field.name}
                        type={field.type}
                        required={field.required}
                        label={field.label}
                        name={field.name}
                        value={field.value}
                        defaultValue={field.defaultValue}
                        placeholder={field.placeholder}
                        variant={model.variant}
                        disabled={field.disabled}
                        options={field.options}
                        sx={model.sx}
                      />
                    );
                  }
                  return null;
                })}
              </CenteredBox>
              {children}
            </CenteredBox>
            <MuiButton
              variant="contained"
              type="submit"
              disabled={isSubmitting}
              sx={{
                width: "20rem",
                py: 1,
                mt: 2,
                borderRadius: "2rem",
                textTransform: "none",
                color: "white.main",
                ...model.buttonSx,
              }}
              content={formName}
            />
          </Form>
        )}
      </Formik>
    </CenteredBox>
  );
};

export default CreateForm;
