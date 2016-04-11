import React from 'react'
import { connect } from 'react-redux'
import Rx from '@reactivex/rxjs'
import winston from 'winston'
import ViewerContainer from '../containers/viewer-container'
import Tags from '../components/tags'
import SettingsModalContainer from '../containers/settings-modal-container'
import { moveDivider } from '../actions'

let Dividerer = React.createClass({

  componentDidMount() {
    const mouseDown$ = Rx.Observable.fromEvent(this.refs.divider, 'mousedown');
    const mouseMove$ = Rx.Observable.fromEvent(document, 'mousemove');
    const mouseUp$ = Rx.Observable.fromEvent(document, 'mouseup');

    mouseDown$.concatMap(() => {
      return mouseMove$.map(mm => mm.clientX).takeUntil(mouseUp$);
    }).subscribe((x) => {

      this.props.dispatch(moveDivider({left: x, right: this.refs.main.clientWidth - x}))

    }, (err) => winston.error(err));
  },

  render() {
    const divStyle = this.props.left ? { left: this.props.left } : {}
    return (
      <div id="main" ref="main">
        <header />
        <SettingsModalContainer />
        <ViewerContainer right={this.props.right}/>
        <div id="divider" style={divStyle} ref="divider"></div>
        <Tags left={this.props.left}/>
      </div>
    );
  }
})

const mapStateToProps = state => {
  return {
    right: state.divider.get('right'),
    left: state.divider.get('left')
  }
}

Dividerer = connect(mapStateToProps)(Dividerer)

export default Dividerer
