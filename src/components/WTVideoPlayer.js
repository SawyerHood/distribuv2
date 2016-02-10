'use strict';
import React from 'react';
import ReactDom from 'react-dom';
import WebTorrent from '../webtorrent.min.js';

export default class WTVideoPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.wtClient= new WebTorrent();
  }
  render() {
    return (<video {...this.props} ref="container" autoPlay controls/>)
  }
  componentDidMount() {

    this.wtClient.add(this.props.torrentURL, (torrent) => {
      let node = ReactDom.findDOMNode(this.refs.container);
      torrent.files[0].renderTo(node);
    });
  }
}
