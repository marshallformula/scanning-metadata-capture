import React from 'react';
import { processDocument } from '../processor';
import { Map } from 'immutable';
// import { all, getAttachment, get} from '../db/docs';

export default React.createClass({
  propTypes: {
    left: React.PropTypes.number
  },

  getInitialState() {
    return {style: {}};
  },

  componentWillReceiveProps() {
    this.setState({style: {left: this.props.left}});
  },

  saveImg() {

    const doc = {
      some: 'value',
      goes: 'here',
      filePath: '/Users/nate/Desktop/Mauck\'s Obits/IMG_3804.JPG'
    };


    //processDocument(doc).subscribe(console.log.bind(console), console.error.bind(console), () => console.log('done!'));
    // all({include_docs: true}).subscribe(console.log.bind(console), console.error.bind(console), () => console.log('done?'));


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
