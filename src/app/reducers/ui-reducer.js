import { TOGGLE_MODAL } from '../actions'
const uiReducer = (state = { showModal: false }, action) => {

  switch(action.type) {
    case TOGGLE_MODAL:
      return { showModal: !state.showModal }

    default:
      return state
  }
}

export default uiReducer