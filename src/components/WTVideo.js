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
import Colors from 'material-ui/lib/styles/colors';
import moment from 'moment';

require('styles//Wtvideo.scss');

const checkStyle = {
  display: 'inline'
};

class VideoCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { vidData: null };
  }

  componentDidMount() {
    $.get(
      'http://localhost:8888/videos/' + this.props.id,
      (data) => {
        this.setState({vidData: data});
        console.log(data);
      }
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
          title = {this.state.vidData ? this.state.vidData.title : "error"}
          subtitle = {this.state.vidData ? "@" + this.state.vidData.uploader.username : "error"}
          style={{backgroundColor: Colors.cyan500}}
          titleStyle={{fontSize: '30px', color: 'white'}}/>
        <CardMedia>
          {this.renderVideo()}
        </CardMedia>
        <CardTitle
          subtitle = {'Uploaded: ' + (this.state.vidData ? moment(this.state.vidData.date).format('L'): "error")}/>
        <CardText>
           {(this.state.vidData ? this.state.vidData.description : "error")}
        </CardText>
        <CardActions>
          <IconButton id = 'iconup' iconClassName = 'material-icons'> thumb_up </IconButton>
          <IconButton id = 'icondown' iconClassName = 'material-icons'> thumb_down </IconButton>
          <IconButton iconClassName='material-icons'>favorite</IconButton>
        </CardActions>
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
