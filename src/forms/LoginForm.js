import React from 'react';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import {reduxForm} from 'redux-form';

const styles = {
  form: {
    padding: 20
  }
};

class LoginForm extends React.Component {
  render() {
    const {fields: {username, password}, handleSubmit} = this.props;
    return (
      <form onSubmit={(e) => {e.preventDefault(); handleSubmit();}} style={styles.form}>
        <div>
          <TextField
            hintText="Username"
            fullWidth
            {...username}/>
        </div>
        <div>
          <TextField
            hintText="Password"
            type="password"
            fullWidth
            {...password}/>
        </div>
        <RaisedButton type="submit" secondary label="Log in" fullWidth/>
      </form>
  );
  }
}

LoginForm = reduxForm({
  form: 'login',
  fields: ['username', 'password']
})(LoginForm);

export default LoginForm;
