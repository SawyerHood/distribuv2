'use strict';

import React from 'react';
import Header from '../components/Header';
import Snackbar from 'material-ui/lib/snackbar';
import { connect } from 'react-redux';
import { actions } from '../redux/modules/notifications';
require('styles//MainLayout.scss');

const mapStateToProps = (state) => ({
    notifications: state.notifications
});

class MainLayout extends React.Component {
  render() {
    return (
      <div className="mainlayout-component">
          <Header history={this.props.history}/>
          <div className="main-content">
              {this.props.children}
          </div>
          <Snackbar
            message={this.props.notifications.message}
            autoHideDuration={4000}
            open={this.props.notifications.open}
            onRequestClose={() => this.props.closeNotification()}
            />
      </div>
    );
  }
}

MainLayout.displayName = 'MainLayout';

// Uncomment properties you need
// MainLayout.propTypes = {};
// MainLayout.defaultProps = {};

export default connect(mapStateToProps, actions)(MainLayout);
