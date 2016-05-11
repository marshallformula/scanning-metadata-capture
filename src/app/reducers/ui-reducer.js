import { TOGGLE_MODAL, TOGGLE_SHOWING_DATAFIELDS, TOGGLE_SHOWING_ADDFIELD } from '../actions'
const uiReducer = (state = { showModal: false, showDataFields: false, showAddField: false }, action) => {

  switch(action.type) {
    case TOGGLE_MODAL:
      return Object.assign({}, state, { showModal: !state.showModal })

    case TOGGLE_SHOWING_DATAFIELDS:
      return Object.assign({}, state, { showDataFields: !state.showDataFields })

    case TOGGLE_SHOWING_ADDFIELD:
      return Object.assign({}, state, { showAddField: !state.showAddField })

    default:
      return state
  }
}

export default uiReducer