import React from 'react';
// import { readFileToBuffer, checksum } from '../util/fileReader';
import { processDocument } from '../processor';
import { Map } from 'immutable';

// import {getAttachment, get} from '../db/docs';
// import fs from 'fs';
// import { map, compose, chain } from 'ramda';

export default React.createClass({
  propTypes: {
    left: React.PropTypes.number
  },

  getInitialState() {
    return { style: {} };
  },

  componentWillReceiveProps() {
    this.setState({style: { left: this.props.left }});
  },

  saveImg() {
    const doc = Map({
      some: 'value',
      goes: 'here',
      filePath: '/Users/nate/Desktop/Mauck\'s Obits/IMG_3804.JPG'
    });

    const saved = processDocument(doc);
    console.log(saved);
    saved.fork(console.error.bind(console), console.log.bind(console));
  },

  render() {
    return (
      <div id="tags" style={this.state.style}>
        <p>this is the tkjkjags</p>
        <div id="content">
            <button className="btn btn-primary" onClick={this.saveImg}>save it</button>
        </div>
      </div>
    );
  }
});
