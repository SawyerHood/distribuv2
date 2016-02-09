require('normalize.css');
require('styles/App.css');

import React from 'react';
import {VideoCard} from './WTVideo'
import $ from 'jquery';
import {getAPIUrl} from '../constants';

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {videos: []};
  }
  componentWillMount() {
    $.get(
      getAPIUrl() + '/videos',
      (data) => {
        this.setState({videos: data});
      }
    );
  }

  render() {
    let videos = this.state.videos.map((video) => {
      return <VideoCard vidData={video} style={{marginBottom: 30}} key={video.id}/>
    });
    return (
      <div className="index">
        {videos}
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
