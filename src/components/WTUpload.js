'use strict';

import React from 'react';
import Card from 'material-ui/lib/card/card';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
//import SelectField from 'material-ui/lib/select-field';
//import MenuItem from 'material-ui/lib/menus/menu-item';
require('styles//Wtupload.scss');

class WTUpload extends React.Component {
  render() {
    return (
    <Card className="upload">
      <form className="form">
      <RaisedButton label="Upload" fullWidth secondary/>
        <TextField
            hintText="Title"
            fullWidth/>
        <TextField
            hintText="Description"
            fullWidth
            rows={4}
            maxrows={20}
            multiLine/>
        <RaisedButton label="Submit" primary fullWidth/>
      </form>
    </Card>
    );
  }
}

WTUpload.displayName = 'WTUpload';

export default WTUpload;
