import { DIVIDER_RESIZE } from '../actions'
import { Map } from 'immutable'


const divider = (state = Map(), action) => {
  switch (action.type) {
    case DIVIDER_RESIZE:
      return state
        .set('left', action.position.left)
        .set('right', action.position.right)

    default:
      return state
  }
}

export default divider
