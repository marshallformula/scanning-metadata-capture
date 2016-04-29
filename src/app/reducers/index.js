import { combineReducers } from 'redux'
import divider from './divider-reducer'
import rotation from './img-rotate-reducer'
import settings from './settings-reducer'

const scanningAppReducers = combineReducers({ divider, rotation, settings })

export default scanningAppReducers
