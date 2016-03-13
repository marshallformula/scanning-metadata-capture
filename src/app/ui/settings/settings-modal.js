import Rx from '@reactivex/rxjs';
import React from 'react';
import ReactDOM from 'react-dom';
import TextField from 'material-ui/lib/text-field';

const Settings = React.createClass({
  render() {
    return (
      <div id="settingsModal" >
        <div className="overlay"></div>
        <div className="modal-box">
          <div className="header">
            <TextField hint="hint text here"></TextField>
          </div>
        </div>
      </div>
    );
  }
});

export default Settings;
