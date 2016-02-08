'use strict';

import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import { Link } from 'react-router';

require('styles//Header.scss');

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }
  toggleLeftNav() {
    this.setState({open: !this.state.open});
  }
  render() {
    return (
      <div>
        <AppBar
          title="distribu"
          className="header"
          iconElementRight={<IconButton iconClassName='material-icons'>file_upload</IconButton>}
          onLeftIconButtonTouchTap={()=>this.toggleLeftNav()}
          onTitleTouchTap={() => this.props.history.push('/')}/>
        <LeftNav
          docked={false}
          open={this.state.open}
          onRequestChange={open => this.setState({open})}>
          <MenuItem><Link to="/signup">Signup</Link></MenuItem>
          <MenuItem><Link to="/upload">Upload</Link></MenuItem>
        </LeftNav>

    </div>
    );
  }
}

Header.displayName = 'Header';

// Uncomment properties you need
// HeaderComponent.propTypes = {};
// HeaderComponent.defaultProps = {};

export default Header;
