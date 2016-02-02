import React from 'react';
import { readFileToBuffer } from '../util/fileReader';
import { persistDocument } from '../processor';

import {getAttachment} from '../db/docs';
import fs from 'fs';

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

    // const saved = persistDocument(doc);
    // const saved = get('691FCF05-9D9B-EF6A-8F6C-FE4F641CE8EF');
    const saved = getAttachment('691FCF05-9D9B-EF6A-8F6C-FE4F641CE8EF', 'IMG_3804.JPG');
    saved.fork(err => console.error(err), data => {
      fs.writeFile('/Users/nate/Desktop/sup.jpg', data, (err, stuff) => {
        if(err) console.error(err);
        console.log(stuff, 'done');
      });
    });

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
