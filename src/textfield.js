import React from 'react';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';

const butStyle = {
  margin: 12,
  float: right,
};

var CommentField = React.createClass ({
  loadComments: function() {
    fetch(this.props.url)
    .then(data => data.json())
    .then(data => this.setState({data: data}))
  },
  render: function(){
    <div id = 'place'></div>
  }
});

var CommentBox = React.createClass({
  render: function(){
    getInitialState: function() {
      return {text: ''};
    },
    handleTextChange: function(e) {
      this.setState({text: e.target.value});
    },
    handleSubmit: function(e) {
      var text = this.state.text.trim();
      if (!text) {
        return;
      }
      this.setState({author: '', text: ''});
    },
    return (
      <div>
        <TextField
          hintText = 'text goes here'
          multiLine = {true}
          rows = {4}
          rowsMax = {4}
          onSubmit = {this.handleSubmit}
          value = {this.state.text}
          onChange = {this.handleTextChange}
        />
        <RaisedButton
          label = 'Primary'
          primary = {true}
          style = {butStyle}
          onTouchTap = {this.handleSubmit} />
      </div>
    );
  }
});

ReactDOM.render(
  React.createElement(CommentBox, url = '/src/comments.json'),
  document.getElementById('place')
);
