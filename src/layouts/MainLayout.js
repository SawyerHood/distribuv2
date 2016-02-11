'use strict';

import React from 'react';
import Header from '../components/Header';
import Paper from 'material-ui/lib/paper';
require('styles//MainLayout.scss');

class MainLayout extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="mainlayout-component">
          <Header history={this.props.history}/>
          <div className="main-content">
              {this.props.children}
          </div>
      </div>
    );
  }
}

MainLayout.displayName = 'MainLayout';

// Uncomment properties you need
// MainLayout.propTypes = {};
// MainLayout.defaultProps = {};

export default MainLayout;
