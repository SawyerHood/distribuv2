'use strict';

import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
require('styles//Header.scss');

class Header extends React.Component {
  render() {
    return (
        <AppBar
        title="distribu"
        className="header"
        iconElementRight={<IconButton iconClassName='material-icons'>file_upload</IconButton>}/>
    );
  }
}

Header.displayName = 'Header';

// Uncomment properties you need
// HeaderComponent.propTypes = {};
// HeaderComponent.defaultProps = {};

export default Header;
