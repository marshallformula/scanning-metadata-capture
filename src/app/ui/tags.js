import React from 'react';

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
  
  render() {
    return (
      <div id="tags" style={this.state.style}>
        <p>this is the tkjkjags</p>
        <div id="content"></div>
      </div>
    );
  }
});
