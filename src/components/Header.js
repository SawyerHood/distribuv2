'use strict';

import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import { Link } from 'react-router';
import { routeActions } from 'react-router-redux';
import { connect } from 'react-redux';
require('styles//Header.scss');
require('styles//Link.scss');

const mapStateToProps = (state) => state;

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
  render() {
    return (
      <div>
        <AppBar
          title={<Link to="/" style={{color: 'white'}}>distribu</Link>}
          className="header"
          iconElementRight={<IconButton iconClassName='material-icons'>file_upload</IconButton>}
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

// Uncomment properties you need
// HeaderComponent.propTypes = {};
// HeaderComponent.defaultProps = {};

export default connect(mapStateToProps, routeActions)(Header);
