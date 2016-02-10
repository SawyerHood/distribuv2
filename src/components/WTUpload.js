'use strict';

import React from 'react';
import Card from 'material-ui/lib/card/card';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import $ from 'jquery';
import {getAPIUrl} from '../constants';
//import SelectField from 'material-ui/lib/select-field';
//import MenuItem from 'material-ui/lib/menus/menu-item';
require('styles//Wtupload.scss');

class WTUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: '', desc: '', vaild: false};
  }
  handleUploadClick() {
    this._fileInput.click();
  }
  handleSubmit(e) {
    e.preventDefault();
    let data = new FormData();
    data.append('title', this.state.title);
    data.append('description', this.state.desc);
    data.append('video_file', this._fileInput.files[0]);
    data.append('uploader', 1);
    $.ajax({
        url: getAPIUrl() +  '/videos/',
        type: 'POST',
        processData: false,
        cache: false,
        contentType: false,
        data: data
    }).done().error((e) => console.log(e));

  }
  handleTitleChange(e) {
      this.setState({title: e.target.value});
  }
  handleDescChange(e) {
      this.setState({desc: e.target.value});
  }
  render() {
    return (
    <Card className="upload">
      <form className="form" onSubmit={(e) => this.handleSubmit(e)}>
      <input type="file" ref={(elem) => this._fileInput = elem} style={{display: 'none'}} accept=".mp4"/>
      <RaisedButton label="Upload" fullWidth secondary onTouchTap={() => this.handleUploadClick()}/>
        <TextField
            hintText="Title"
            fullWidth
            onChange={(e) => this.handleTitleChange(e)}/>

        <TextField
            hintText="Description"
            fullWidth
            rows={4}
            maxrows={20}
            onChange={(e) => this.handleDescChange(e)}
            multiLine/>
        <RaisedButton label="Submit" primary fullWidth type="submit"/>
      </form>
    </Card>
    );
  }
}

WTUpload.displayName = 'WTUpload';

export default WTUpload;
