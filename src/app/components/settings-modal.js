import React from 'react';
import fs from 'fs'
import { merge } from '../util/object-utils'
import TextField from 'material-ui/TextField'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import NavigationClose from 'material-ui/svg-icons/navigation/close'

const closeModal = () => {
  
}

const tfStyle = {
  width: '100%'
};

const isDir = file => {
  try {
    return fs.lstatSync(file).isDirectory()
  } catch (e) {
    return false
  }
}



const SettingsModal = React.createClass({

  componentWillReceiveProps(nextProps){
    this.setState(merge(this.state, { srcDir: nextProps.settings.srcDir }))
  },

  getInitialState() {
      return {errorText: false, srcDir: {}}
  },

  componentWillMount(){
    this.props.fetchSettings()
  },

  keyDown(e) {
    if(e.keyCode == 13) {
      const dir = e.target.value
      if(isDir(dir)) {
        this.setState({ errorText: false })
        this.props.saveSettings(merge(this.props.settings, {srcDir: dir}))
      } else {
        this.setState({ errorText: 'Not a valid directory' })
      }
    }
  },

  changed(e) {
    this.setState(merge(this.state, {srcDir: e.target.value}))
  },


  render() {
    return (
      <div id="settingsModal">
        <div className="overlay"></div>
        <div className="modal-box">
          <AppBar title="Application Settings"
            iconElementLeft={<IconButton onTouchTap={closeModal} > <NavigationClose/> </IconButton>} />
          <div className="modal-body">
            <TextField
              onKeyDown={this.keyDown}
              style={tfStyle}
              errorText={this.state.errorText}
              hint="hint text here"
              onChange={this.changed}
              floatingLabelText="Source Directory"
              value={this.state.srcDir} />
          </div>
        </div>
      </div>
    )}
})


export default SettingsModal;
