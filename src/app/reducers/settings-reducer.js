import { SAVE_SETTINGS } from '../actions'
import { Map } from 'immutable'

const settings = (state = Map({ srcDir: '/over/there'}), action) => {
  switch(action.type) {
    case SAVE_SETTINGS:
      return state.set('srcDir', action.srcDir)

    default:
      return state
  }
}

export default settings
