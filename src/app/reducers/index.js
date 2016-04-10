import { combineReducers } from 'redux'
import divider from './divider-reducer'
import rotation from './img-rotate-reducer'

const scanningApp = combineReducers({ divider, rotation })

export default scanningApp
