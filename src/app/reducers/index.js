import { combineReducers } from 'redux'
import fields from './fields-reducer'
import divider from './divider-reducer'
import rotation from './img-rotate-reducer'
import settings from './settings-reducer'
import ui from './ui-reducer'

const scanningAppReducers = combineReducers({
  divider, rotation, settings, ui, fields
})

export default scanningAppReducers
