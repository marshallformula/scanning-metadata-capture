import React from 'react';
import { readFileToBuffer, checksum } from '../util/fileReader';
import { persistDocument } from '../processor';

import {getAttachment, get} from '../db/docs';
import fs from 'fs';
import { map, compose } from 'ramda';

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
    const img = '/Users/nate/Desktop/Mauck\'s Obits/IMG_3804.JPG';
    const doc = {
      some: 'value',
      goes: 'here',
      filePath: img
    };


    const hash = compose(map(checksum), readFileToBuffer);
    hash(img).fork(console.error.bind(console), console.log.bind(console));

    //const saved = persistDocument(doc);
     //const saved = get('45476025-EB8F-7256-842F-E44885C5DCCB');
     //const saved = getAttachment('45476025-EB8F-7256-842F-E44885C5DCCB', 'IMG_3804.JPG');
    //saved.fork(err => console.error(err), data => {
    //  console.log(data);
      /*fs.writeFile('/Users/nate/Desktop/sup.jpg', data, (err, stuff) => {
        if(err) console.error(err);
        console.log(stuff, 'done');
      });*/
    //});

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
