import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { Stepper, Step, StepLabel, Button } from "@mui/material";
import getValidationSchema from "./getValidationSchema";

const FormStepper = (modelName, model) => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const getInitialValues = (fields) => {
    return fields?.reduce((values, field) => {
      values[field.name] = field.value || "";
      return values;
    }, {});
  };

  return (
    <Formik
      initialValues={getInitialValues(model.steps[activeStep].fields)}
      validationSchema={getValidationSchema(model.steps[activeStep].fields)}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
        handleNext();
      }}
    >
      {({ isSubmitting }) => (
        <Form
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Stepper activeStep={activeStep} alternativeLabel>
            {model.steps.map((step) => (
              <Step key={step.title}>
                <StepLabel>{step.title}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {model.steps[activeStep].fields.map((field) => (
            <Field
              key={field.name}
              name={field.name}
              type={field.type}
              label={field.label}
              placeholder={field.placeholder}
              required={field.required}
            />
          ))}

          <div>
            {activeStep !== 0 && <Button onClick={handleBack}>Back</Button>}
            <Button type="submit" disabled={isSubmitting}>
              {activeStep === model.steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FormStepper;
