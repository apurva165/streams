import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends React.Component {
  renderInput = ({ input, label, meta }) => {
    //const input = formProps.input;
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        <div>{meta.error}</div>
      </div>
    );
  };

  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };
  render() {
    //console.log(this.props);
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form"
      >
        <Field label="Enter Title" name="title" component={this.renderInput} />
        <Field
          label="Enter Description"
          name="description"
          component={this.renderInput}
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "Must Enter Title";
  }
  if (!formValues.description) {
    errors.description = "Must Enter description";
  }
  return errors;
};

export default reduxForm({
  form: "reduxForm",
  validate
})(StreamForm);
