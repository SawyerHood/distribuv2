'use strict';

import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import RaisedButton from 'material-ui/lib/raised-button';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import { Link } from 'react-router';
import { routeActions } from 'react-router-redux';
import { actions } from '../redux/modules/user';
import { connect } from 'react-redux';
require('styles//Link.scss');

const mapStateToProps = (state) => ({
  user: state.user,
})

const styles = {
  rightButton: { marginTop: 5 },
  link: { color: 'white' },
  header: { marginBottom: 10 }
};

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }
  toggleLeftNav() {
    this.setState({open: !this.state.open});
  }
  createClickFunction(path) {
    return () => {
      this.toggleLeftNav();
      this.props.push(path);
    };
  }
  renderMenuLink(text, path) {
    return <MenuItem onTouchTap={this.createClickFunction(path)}>{text}</MenuItem>;
  }
  renderRightButton() {
    const {loggedIn} = this.props.user;
    return (<RaisedButton label={loggedIn ? 'Logout' : 'Login'}
      style={styles.rightButton}
      onTouchTap={
        loggedIn ?
          () => this.props.logout() :
          () => this.props.push('/login')
        }/>);
  }
  render() {
    return (
      <div>
        <AppBar
          title={<Link to="/" style={styles.link}>distribu</Link>}
          style={styles.header}
          iconElementRight={this.renderRightButton()}
          onLeftIconButtonTouchTap={()=>this.toggleLeftNav()}/>
        <LeftNav
          docked={false}
          open={this.state.open}
          onRequestChange={open => this.setState({open})}>
          {this.renderMenuLink('Home', '/')}
          {this.renderMenuLink('Signup', '/signup')}
          {this.renderMenuLink('Upload', '/upload')}
        </LeftNav>
    </div>
    );
  }
}

Header.displayName = 'Header';

export default connect(mapStateToProps, {...routeActions, ...actions})(Header);
