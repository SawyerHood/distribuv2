
'use strict';
import { Link } from 'react-router';
import { routeActions } from 'react-router-redux';
import React from 'react';
import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';
import CardText from 'material-ui/lib/card/card-text';
import Colors from 'material-ui/lib/styles/colors';
import SignupForm from '../forms/SignupForm';
import { connect } from 'react-redux';
import $ from 'jquery';
import { getAPIUrl } from '../constants';

const styles = {
  card: {},
  title: {fontSize: '30px', color: 'white'},
  header: {backgroundColor: Colors.cyan500},
  error: {color: 'red'}
};

const mapStateToProps = (state) => ({
  user: state.user
});

class SignupView extends React.Component {
  submitSignup(values) {
    const json = {
      username: values.username,
      password: values.password,
      email: values.email
    };
    return new Promise((resolve, reject) => {
      $.post(getAPIUrl() + '/users/', json)
        .done(() => {
          this.props.push('/login');
          resolve();
        }).fail((data) => {
          const errors = {_error: 'Signup Failed'};
          for (let key in data.responseJSON) {
            errors[key] = data.responseJSON[key][0];
          }
          reject(errors);
        });
    });
  }

  render() {
    return (
      <Card>
        <CardHeader title="Signup" style={styles.header} titleStyle={styles.title}/>
        <SignupForm onSubmit={this.submitSignup.bind(this)}/>
        <CardText fullWidth>If you have an account you can log in <Link to="login">here</Link>.</CardText>
      </Card>
    );
  }
}

SignupView.displayName = 'SignupView';

export default connect(mapStateToProps, routeActions)(SignupView);
