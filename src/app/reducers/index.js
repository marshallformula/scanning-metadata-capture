import { combineReducers } from 'redux'
import divider from './divider-reducer'
import rotation from './img-rotate-reducer'
import settings from './settings-reducer'

const scanningApp = combineReducers({ divider, rotation, settings })

export default scanningApp
