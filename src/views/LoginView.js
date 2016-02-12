'use strict';
import { Link } from 'react-router';
import React from 'react';
import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';
import CardText from 'material-ui/lib/card/card-text';
import Colors from 'material-ui/lib/styles/colors';
import LoginForm from '../forms/LoginForm';
import {actions} from '../redux/modules/user';
import { connect } from 'react-redux';

const styles = {
  card: {},
  title: {fontSize: '30px', color: 'white'},
  header: {backgroundColor: Colors.cyan500},
  error: {color: 'red'}
};

const mapStateToProps = (state) => ({
  user: state.user
});

class LoginView extends React.Component {
  submitLogin(values) {
    console.log("Here");
    this.props.login(values.username, values.password);
  }
  render() {
    return (
      <Card>
        <CardHeader title="Log in" style={styles.header} titleStyle={styles.title}/>
        {(this.props.user.loginError ? <CardText style={styles.error}>Your username or password is incorrect.</CardText> : null)}
        <LoginForm onSubmit={this.submitLogin.bind(this)}/>
        <CardText fullWidth>If you do not have an account you can create one <Link to="/signup">here</Link></CardText>
      </Card>
    );
  }
}

LoginView.displayName = 'LoginView';

export default connect(mapStateToProps, actions)(LoginView);
