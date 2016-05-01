import { TOGGLE_SHOWING_DATAFIELDS } from '../actions'

const reducer = (state = { showing: true }, action) => {

  switch(action.type) {

    case TOGGLE_SHOWING_DATAFIELDS:
      return { showing: !state.showing }

    default:
      return state
  }
}

export default reducer