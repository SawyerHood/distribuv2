'use strict';

import React from 'react';
import AppBar from 'material-ui/lib/app-bar';

require('styles//Header.scss');

class Header extends React.Component {
  render() {
    return (
      <div>
        <AppBar title="distribu" className="header"/>
        <div className="content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

Header.displayName = 'Header';

// Uncomment properties you need
// HeaderComponent.propTypes = {};
// HeaderComponent.defaultProps = {};

export default Header;
