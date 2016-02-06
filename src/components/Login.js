'use strict';
import { Link } from 'react-router';
import React from 'react';
import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';
import CardText from 'material-ui/lib/card/card-text';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import Colors from 'material-ui/lib/styles/colors';

require('styles//Login.scss');

class Login extends React.Component {
  render() {
    return (
      <Card className="login">
            <CardHeader title="Log in" style={{backgroundColor: Colors.cyan500}} titleStyle={{fontSize: '30px', color: 'white'}}/>
            <form onSubmit={this.handleSubmit} className="form">
            <TextField
              hintText="Username"
              fullWidth/>
            <br/>
            <TextField
              hintText="Password"
              type="password"
              fullWidth/>
            <br/>
            <RaisedButton type="submit" secondary label="Log in" fullWidth/>
          </form>
          <CardText fullWidth>If you do not have an account you can create one <Link to="/signup">here</Link></CardText>
          </Card>
    );
  }
}

Login.displayName = 'Login';

// Uncomment properties you need
// Login.propTypes = {};
// Login.defaultProps = {};

export default Login;
