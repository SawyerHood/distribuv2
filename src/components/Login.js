'use strict';
import { Link } from 'react-router';
import React from 'react';
import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';
import CardText from 'material-ui/lib/card/card-text';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import Colors from 'material-ui/lib/styles/colors';
import $ from 'jquery';
import {getAPIUrl} from '../constants';
import {actions} from '../redux/modules/user';
import { connect } from 'react-redux';

require('styles//Login.scss');

const mapStateToProps = (state) => ({
  user: state.user
}); 

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: '', password: ''};
  }
  onUsernameType(e) {
    this.setState({username: e.target.value}); 
  }
  onPasswordType(e) {
    this.setState({password: e.target.value}); 
  }
  submitLogin(e) {
    e.preventDefault();
    this.props.login(this.state.username, this.state.password); 
  }
  render() {
    return (
      <Card className="login">
            <CardHeader title={this.props.user.token ? this.props.user.token  : "Log in"} style={{backgroundColor: Colors.cyan500}} titleStyle={{fontSize: '30px', color: 'white'}}/>
            <form onSubmit={(e) => this.submitLogin(e)} className="form">
            <TextField
              onChange={(e) => this.onUsernameType(e)}
              hintText="Username"
              fullWidth/>
            <br/>
            <TextField
              onChange={(e) => this.onPasswordType(e)}
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

export default connect(mapStateToProps, actions)(Login);
