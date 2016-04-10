import { IMAGE_ROTATE } from '../actions'

const rotation = (state = 0, action) => {
  switch(action.type) {
    case IMAGE_ROTATE:
      return action.rotation
      
    default:
      return state
  }
}

export default rotation
