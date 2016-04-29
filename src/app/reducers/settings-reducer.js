import { PERSIST_SETTINGS, RECEIVE_SETTINGS, DATABASE_ERROR } from '../actions'

const settings = (state = { srcDir: '/over/there'}, action) => {
  switch(action.type) {
    case PERSIST_SETTINGS:
      console.log('IN REDUCER ', action)
      return Object.assign({}, state, {srcDir: action.settings.srcDir})

    case RECEIVE_SETTINGS:
      console.log('received settings', action.settings)
      return action.settings

    case DATABASE_ERROR:
      console.error(action.err)
      alert(`Error Saving settings: ${action.err.message}`)

    default:
      return state
  }
}

export default settings
