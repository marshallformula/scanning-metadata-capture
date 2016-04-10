import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import scanningApp from './reducers'
import Dividerer from './containers/divider-container'

import injectTapEventPlugin from 'react-tap-event-plugin'
// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin()

const store = createStore(scanningApp)
const App = () => <Dividerer />


render(<Provider store={store}>
        <App />
      </Provider>,
      document.getElementById('app'));
