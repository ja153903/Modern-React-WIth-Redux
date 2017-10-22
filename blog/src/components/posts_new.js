import React, { Component } from 'react';
// We want to use redux-form to validate forms
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

// Your field doesn't know how to render itself
// so you have to create a component prop

// Redux form only handles the validation and
// state of the form. Not POST requests

class PostsNew extends Component {

  // field object contains event handlers
  // that we need to wire up with the Field
  // component
  // unpack field input to get event handlers
  // field.meta.error prop is immediately added
  // from the validate function
  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;
    return (
      <div className={className}>
        <label>{ field.label }</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    );
  }

  onSubmit(values) {
    // Upon finishing the function
    // you will be routed back to whatever is in
    // the history
    this.props.createPost(values, () => {
      this.props.history.push('/');
    });
  }

  render() {

    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Title for Post"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field
          label="Post Content"
          name="content"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

function validate(values) {
  // console.log(values) => { title: 'sdfs', categories: 'sfdsd', content}
  const errors = {};

  // Validate the inputs from the 'values' object
  if (!values.title || values.title.length < 3) {
    errors.title = "Enter a title that is at least 3 characters!";
  }

  if (!values.categories) {
    errors.categories = "Enter a category!";
  }

  if (!values.content) {
    errors.content = "Enter content!";
  }

  // If errors is empty, the form is fine to submit
  // If errors has any properties, redux form assumes form is invalid
  return errors;
}

// The form string has to be unique
// if not there will be merge conflicts
export default reduxForm({
  validate: validate,
  form: 'PostsNewForm'
})(
  connect(null, { createPost })(PostsNew)
);
