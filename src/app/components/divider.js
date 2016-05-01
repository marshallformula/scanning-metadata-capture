import React, { PropTypes } from 'react'
import Rx from '@reactivex/rxjs'
import { fileExists } from '../util/fileReader'
import ViewerContainer from '../containers/viewer-container'
import Tags from '../components/tags'
import SettingsModalContainer from '../containers/settings-modal-container'
import DataFieldsContainer from '../containers/data-fields-container'

let Divider = React.createClass({

  propTypes: {
    right: PropTypes.number,
    left: PropTypes.number,
    showModal: PropTypes.bool.isRequired,
    toggleModal: PropTypes.func.isRequired,
    moveDivider: PropTypes.func.isRequired,
    forceModal: PropTypes.func.isRequired
  },



  componentDidMount() {

    const { settings, forceModal, moveDivider } = this.props

    //force settings modal if srcDir is invalid
    fileExists(settings.srcDir).subscribe({
      next: f => {
        if(!f.isDirectory()) forceModal()
      },
      error: err => {
        console.error(err)
        forceModal()
      }
    })
    
    const mouseDown$ = Rx.Observable.fromEvent(this.refs.divider, 'mousedown');
    const mouseMove$ = Rx.Observable.fromEvent(document, 'mousemove');
    const mouseUp$ = Rx.Observable.fromEvent(document, 'mouseup');

    mouseDown$.concatMap(() => {
      return mouseMove$.map(mm => mm.clientX).takeUntil(mouseUp$);
    }).subscribe((x) => {

      moveDivider({ left: x, right: this.refs.main.clientWidth - x })

    }, (err) => console.error(err));
  },

  render() {

    const { left, right, showModal, toggleModal, openDF } = this.props

    const settingsModal = showModal ? <SettingsModalContainer /> : undefined;

    const divStyle = left ? { left } : {}
    return (
      <div id="main" ref="main">
        <header>
          <button className="btn btn-link pull-right" onClick={toggleModal}>
            <span className="fa fa-cog" /> settings
          </button>
          <button className="btn btn-link pull-right" onClick={openDF}>
            <span className="fa fa-sliders" /> data fields
          </button>
        </header>
        <DataFieldsContainer />
        {settingsModal}
        <ViewerContainer right={right}/>
        <div id="divider" style={divStyle} ref="divider"></div>
        <Tags left={left}/>
      </div>
    );
  }
})

export default Divider