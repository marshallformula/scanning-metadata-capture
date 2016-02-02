import React from 'react';
import { Map } from 'immutable';

export default React.createClass({
  propTypes: {
    right: React.PropTypes.number
  },

  getInitialState() {
    return {data: Map({ style: {}, rotate: 0 })};
  },

  componentWillReceiveProps() {
    this.setState(({data}) => ({
      data: data.set('style', { right: this.props.right })
    }));
  },

  rotateLeft() {
    this.setState(({data}) => ({
      data: data.set('rotate', data.get('rotate') - 90)
    }));
  },

  rotateRight(){
    this.setState(({data}) => ({
      data: data.set('rotate', data.get('rotate') + 90)
    }));
  },

  render() {
    const data = this.state.data;
    const trans = { transform: `rotateZ(${data.get('rotate')}deg)`};

    return (
      <div id="viewer" style={data.get('style')}>

        <img className="img-responsive" style={trans} src="/Users/nate/Desktop/Mauck's Obits/IMG_3804.JPG" />

        <div className="rotate">
          <button onClick={this.rotateLeft} className="btn btn-default btn-sm">
            <span className="fa fa-rotate-left"></span>
          </button>
          <button onClick={this.rotateRight} className="btn btn-default btn-sm">
            <span className="fa fa-rotate-right"></span>
          </button>
        </div>

      </div>
    );
  }
});
