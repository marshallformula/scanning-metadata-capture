import React from 'react';
import fs from 'fs'
import TextField from 'material-ui/lib/text-field';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close';

const noop = () => {}

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


  getInitialState() {
    return { errorText: false }
  },

  keyDown(e) {
    if(e.keyCode == 13) {
      const dir = e.target.value
      if(isDir(dir)) {
        console.log('valid')
        this.setState({ errorText: false })
        this.props.save({ srcDir: dir })
        console.log('props', this.props)
      } else {
        this.setState({ errorText: 'Not a valid directory' })
      }
    }
  },


  render() {
    return (
      <div id="settingsModal">
        <div className="overlay"></div>
        <div className="modal-box">
          <AppBar title="Application Settings"
            onTitleTouchTap={noop}
            iconElementLeft={<IconButton onTouchTap={noop} > <NavigationClose/> </IconButton>} />
          <div className="modal-body">
            <TextField
              errorText={this.state.errorText}
              onKeyDown={this.keyDown}
              style={tfStyle}
              hint="hint text here"
              floatingLabelText="Source Directory"
              defaultValue={this.props.settings.get('srcDir')}></TextField>
          </div>
        </div>
      </div>
    )}
})


export default SettingsModal;
