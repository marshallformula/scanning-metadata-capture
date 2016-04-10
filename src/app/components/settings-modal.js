import Rx from '@reactivex/rxjs';
import React from 'react';
import TextField from 'material-ui/lib/text-field';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close';

const tfStyle = {
  width: '100%'
};

const handleTouch = () => {
  alert('clicked?');
  console.log('close it');
}

const close = () => {
  alert('close box');
}

const entered = (e) => {
  console.log(e.keyCode)
}


const Settings = React.createClass({

  render() {
    return (
      <div id="settingsModal">
        <div className="overlay"></div>
        <div className="modal-box">
            <AppBar title="Application Settings"
              onTitleTouchTap={handleTouch}
              iconElementLeft={< IconButton onTouchTap={close} > <NavigationClose/> </IconButton>} />
          <div className="modal-body">
            <TextField onKeyDown={entered} style={tfStyle} hint="hint text here" floatingLabelText="Source Directory"></TextField>
          </div>
        </div>
      </div>
    );
  }
});

export default Settings;
