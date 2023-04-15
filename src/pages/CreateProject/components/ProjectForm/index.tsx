import { Formik, Form, Field, type FormikHelpers } from "formik";
import { useState, type ReactElement } from "react";

import "../../style.css";
import Button from "src/components/Button";

interface Values {
  projectname: string;
  client: string;
  description: string;
}

const ProjectForm = (): ReactElement => {
  const [formData, setFormData] = useState<Values>({
    projectname: "",
    client: "",
    description: "",
  });
  const handleSubmit = (values: Values, e?: SubmitEvent): void => {
    console.log(e);
    console.log(values);
    setFormData({ ...formData });
  };

  return (
    <div className="project_form_section">
      <h2>Create Project</h2>
      <Formik
        initialValues={formData}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>,
        ) => {
          handleSubmit(values);
          setSubmitting(false);
        }}
      >
        <Form>
          <div className="input-group">
            <label htmlFor="">Project Name</label>
            <div className="input-section">
              <Field
                id="projectname"
                name="projectname"
                className="input-field"
              />
            </div>
          </div>
          <div className="input-group">
            <label htmlFor="">Client</label>
            <div className="input-section">
              <Field id="client" name="client" className="input-field" />
            </div>
          </div>
          <div className="input-group">
            <label htmlFor="">Description</label>
            <div className="input-section">
              <Field
                id="description"
                name="description"
                className="input-field"
              />
            </div>
          </div>
          <Button title="Create" classes="small-btn grn-btn w-100" />
        </Form>
      </Formik>
    </div>
  );
};

export default ProjectForm;
