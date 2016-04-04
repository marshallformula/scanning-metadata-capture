import React from 'react'
import {render} from 'react-dom'
import Viewer from './ui/viewer'
import Tags from './ui/tags'
import Settings from './settings/settings-modal'
import { Map } from 'immutable'
import Rx from '@reactivex/rxjs'
import {Provider, connect} from 'react-redux'
import {createStore, combineReducers} from 'redux'
import {DIVIDER_RESIZE, moveDivider} from './actions'

import injectTapEventPlugin from 'react-tap-event-plugin'
// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin()

///reducer
const dividerReducer = (state = Map(), action) => {
  switch (action.type) {
    case DIVIDER_RESIZE:
      return state
        .set('left', action.position.left)
        .set('right', action.position.right)

    default:
      return state
  }
}

const store = createStore(combineReducers({divider: dividerReducer}))

const App = React.createClass({

  componentDidMount() {
    const mouseDown$ = Rx.Observable.fromEvent(this.refs.divider, 'mousedown');
    const mouseMove$ = Rx.Observable.fromEvent(document, 'mousemove');
    const mouseUp$ = Rx.Observable.fromEvent(document, 'mouseup');

    mouseDown$.concatMap(() => {
      return mouseMove$.map(mm => mm.clientX).takeUntil(mouseUp$);
    }).subscribe((x) => {

      store.dispatch(moveDivider({left: x, right: this.refs.main.clientWidth - x}))

    }, (err) => console.log(err));

  },
  render() {
    const divStyle = this.props.left ? { left: this.props.left } : {}
    return (
      <div id="main" ref="main">
        <header />
        <Settings />
        <Viewer right={this.props.right}/>
        <div id="divider" style={divStyle} ref="divider"></div>
        <Tags left={this.props.left}/>

      </div>
    );
  }
});

const mapStateToProps = (state, ownProps) => {
  return {
    right: state.divider.get('right'),
    left: state.divider.get('left')
  }
}
const ReApp = connect(mapStateToProps)(App)

render(<Provider store={store}>< ReApp /></Provider>, document.getElementById('app'));
