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
import {Link} from 'react-router';

require('styles//Wtvideo.scss');
require('styles//Link.scss');

const checkStyle = {
  display: 'inline'
};

export class VideoCard extends React.Component {
  constructor(props) {
    super(props);
  }


  renderVideo() {
    if (this.props.vidData) {
      return <video ref="vid" src={this.props.vidData.video_file} autoPlay controls/>;
    }
    return <img src="http://lorempixel.com/600/337/nature/"/>;
  }

  render() {
    return (
      <div style={this.props.style}>
      <Card>
        <CardHeader
          title = {this.props.vidData ? (<Link style={{color: 'white'}} to={'/video/' + this.props.vidData.id}>{this.props.vidData.title}</Link>) : "error"}
          subtitle = {this.props.vidData ? "@" + this.props.vidData.uploader.username : "error"}
          style={{backgroundColor: Colors.cyan500}}
          titleStyle={{fontSize: '30px', color: 'white'}}/>
        <CardMedia>
          {this.renderVideo()}
        </CardMedia>
        <CardTitle
          subtitle = {'Uploaded: ' + (this.props.vidData ? moment(this.props.vidData.date).format('L'): "error")}/>
        <CardText>
           {(this.props.vidData ? this.props.vidData.description : "error")}
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

export default class WTVideo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {vidData: null};
  }

  componentDidMount() {
    $.get(
      'http://localhost:8888/videos/' + this.props.params.id,
      (data) => {
        this.setState({vidData: data});
        console.log(data);
      }
    );
  }
  render() {
    return (
      <VideoCard vidData={this.state.vidData}/>
    );
  }
}



WTVideo.displayName = 'WTVideo';
