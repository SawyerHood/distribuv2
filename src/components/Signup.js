'use strict';

import React from 'react';
import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';
import CardText from 'material-ui/lib/card/card-text';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import Colors from 'material-ui/lib/styles/colors';
import { Link } from 'react-router';

require('styles//Signup.scss');

class Signup extends React.Component {
  render() {
    return (
      <Card className="signup">
            <CardHeader title="Signup" style={{backgroundColor: Colors.cyan500}} titleStyle={{fontSize: '30px', color: 'white'}}/>
            <form onSubmit={this.handleSubmit} className="form">
            <TextField
              hintText="Email"
              fullWidth/>
            <br/>
            <TextField
              hintText="Username"
              fullWidth/>
            <br/>
            <TextField
              hintText="Password"
              type="password"
              fullWidth/>
            <br/>
            <RaisedButton type="submit" secondary label="Sign up" fullWidth/>
          </form>
          <CardText fullWidth>If you have an account you can log in <Link to="login">here</Link>.</CardText>
          </Card>
    );
  }
}

Signup.displayName = 'Signup';

// Uncomment properties you need
// Signup.propTypes = {};
// Signup.defaultProps = {};

export default Signup;
