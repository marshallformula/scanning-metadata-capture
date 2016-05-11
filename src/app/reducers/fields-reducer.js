import { RECEIVE_FIELDS, PERSIST_FIELDS } from '../actions'

export default (state = { fields: [] }, action) => {
  switch (action.type) {

    case RECEIVE_FIELDS:
    case PERSIST_FIELDS:
      return Object.assign({}, state, action.fieldData)

    default:
      return state

  }
}