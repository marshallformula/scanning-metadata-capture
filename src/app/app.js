import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { fetchSettings } from './actions'
import scanningAppReducers from './reducers'
import Dividerer from './containers/divider-container'

import injectTapEventPlugin from 'react-tap-event-plugin'
// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin()

const logger = createLogger({
  actionTransformer: (action) => ({
    action,
    type: String(action.type)
  })
})
const store = createStore(scanningAppReducers, applyMiddleware(thunk, logger))
const App = () => <Dividerer />

store.dispatch(fetchSettings())
store.subscribe(() => {

  render(<Provider store={store}>
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <App />
      </MuiThemeProvider>
    </Provider>,
    document.getElementById('app'));
})


