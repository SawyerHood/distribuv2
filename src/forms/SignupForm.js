import React from 'react';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import {reduxForm} from 'redux-form';

const styles = {
  form: {
    padding: 20
  }
};

const validate = (values) => {
  const errors = {};
  if (values.username && (values.username.length < 3 || values.username.length > 15)) {
    errors.username = 'Username must be between 3 and 15 characters';
  }
  if (values.password && values.password.length < 5) {
    errors.password = 'Password must be at least 5 characters long.';
  }
  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Enter a valid email address.';
  }
  return errors
};

class SignupForm extends React.Component {
  render() {
    const {fields: {username, password, email}, handleSubmit} = this.props;
    return (
      <form onSubmit={(e) => {e.preventDefault(); handleSubmit();}} style={styles.form}>
        <TextField
          hintText="Email"
          {...email}
          errorText={email.error}
          fullWidth/>
        <TextField
          hintText="Username"
          {...username}
          errorText={username.error}
          fullWidth/>
        <TextField
          hintText="Password"
          type="password"
          {...password}
          errorText={password.error}
          fullWidth/>
        <RaisedButton type="submit" secondary label="Sign up" fullWidth/>
      </form>
    );
  }

}

SignupForm = reduxForm({
  form: 'signup',
  fields: ['username', 'password', 'email'],
  validate
})(SignupForm);

export default SignupForm;
