import React from 'react';
import ReactDOM from 'react-dom';
import Viewer from './ui/viewer';
import Tags from './ui/tags';
import Rx from 'rx';
import { Map } from 'immutable';

const App = React.createClass({
  getInitialState() {
    return {data: Map({style: {}, right: 0})};
  },

  componentDidMount() {
    const mouseDown$ = Rx.Observable.fromEvent(this.refs.divider, 'mousedown');
    const mouseMove$ = Rx.Observable.fromEvent(document, 'mousemove');
    const mouseUp$ = Rx.Observable.fromEvent(document, 'mouseup');

    mouseDown$.flatMap(() => {
      return mouseMove$.map(mm => mm.clientX).takeUntil(mouseUp$);
    }).subscribe((x) => {

      this.setState(({ data }) => ({
        data: data.set('style', {left: x}).set('right', this.refs.main.clientWidth -x)
      }));
      
    }, (err) => console.log(err));

  },
  render() {
    const data = this.state.data;
    return (
      <div id="main" ref="main">

        <Viewer right={data.get('right')}/>
        <div id="divider" style={data.get('style')} ref="divider"></div>
        <Tags left={data.get('style').left}/>

      </div>
    );
  }
});

ReactDOM.render(< App />, document.getElementById('app'));
