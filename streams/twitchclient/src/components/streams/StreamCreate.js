import React from 'react';
//Field is a component, reduxForm is a function acting similar to connect funct
////field solicits input from the user
import {Field, reduxForm} from 'redux-form';

class StreamCreate extends React.Component {
  //destructuring meta.error
  renderError({error, touched}) {
    if (touched && error)
    {
      return (
          <div className="ui error message">
            <div className="header">{error}</div>
          </div>
      )
    }
  }

  //destructuring from formProps.label, formProps.input, formProps.meta
  //meta.error holds the error msg
  renderInput = ({label, input, meta}) => {
    const className=`field ${meta.error && meta.touched ? 'error': ''}`;
    // console.log('meta error', meta.error);
    //#231 8:00 mark
    /*
    <input onChange={formProps.input.onChange} value={formProps.input.value}/>
     */ //below syntax means add all input's props as props to input
    return (
        <div className={className}>
          <label>
            {label}
          </label>
          <input {...input} autoComplete={"off"}/>
          {this.renderError(meta)}
        </div>
    )
  }

  onSubmit(formValues) {
    console.log(formValues);
  }
  //handleSubmit #233 2:30
  render() {
    return (
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}
              className="ui form error">
          <Field name="title" component={this.renderInput} label="Enter Title"/>
          <Field name="description" component={this.renderInput}
                  label="Enter Description"/>
          <button className="ui button primary">Submit</button>
        </form>
    )
  }
}

//235
//validate is called everytime Form is initially rendered
//or the user interacts with it
const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    //only ran if the user did not enter a title
    errors.title = 'You must enter a title';
  }
  if (!formValues.description) {
    errors.description = 'You must enter a description';
  }
  return errors;
};
export default reduxForm({
  form: 'streamCreate',
  validate: validate
})(StreamCreate);
