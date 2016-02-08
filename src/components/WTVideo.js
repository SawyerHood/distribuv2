'use strict';

import React from 'react';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import CardText from 'material-ui/lib/card/card-text';
import IconButton from 'material-ui/lib/icon-button';
import Checkbox from 'material-ui/lib/checkbox';
import ActionFavorite from 'material-ui/lib/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/lib/svg-icons/action/favorite-border';
import $ from 'jquery';

require('styles//Wtvideo.scss');

const checkStyle = {
  marginRight: 100
};

class VideoCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidUpdate(_prevProps, _prevState) {
  }
  componentDidMount() {
    $.get(
      'http://localhost:8888/videos/' + this.props.id,
      (data) => this.setState({vidData: data})
    );
  }
  renderVideo() {
    if (this.state.vidData) {
      return <video ref="vid" src={this.state.vidData.video_file} autoPlay controls/>;
    }
    return <img src="http://lorempixel.com/600/337/nature/"/>;
  }
  render() {
    return (
      <div>
      <Card>
        <CardHeader
          title = 'Best Video Ever'
        />
        <CardMedia>
          {this.renderVideo()}
        </CardMedia>
        <CardTitle
          title = 'username'
          subtitle = 'uploaded on date'
        />
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </CardText>
        <CardActions>
          <IconButton id = 'iconup' iconClassName = 'material-icons' tooltip = 'up'> thumb_up </IconButton>
          <IconButton id = 'icondown' iconClassName = 'material-icons' tooltip = 'down'> thumb_down </IconButton>
        </CardActions>
        <Checkbox
          checkedIcon = {<ActionFavorite />}
          unCheckedIcon = {<ActionFavoriteBorder />}
          style = {checkStyle}
        />
      </Card>
      </div>
    )
  }
}

class WTVideo extends React.Component {
  render() {
    return (
      <VideoCard id={this.props.params.id}/>
    );
  }
}



WTVideo.displayName = 'WTVideo';

// Uncomment properties you need
// WTVideo.propTypes = {};
// WTVideo.defaultProps = {};

export default WTVideo;
