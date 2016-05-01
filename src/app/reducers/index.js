import { combineReducers } from 'redux'
import divider from './divider-reducer'
import rotation from './img-rotate-reducer'
import settings from './settings-reducer'
import ui from './ui-reducer'
import dataFields from './data-fields-reducer'

const scanningAppReducers = combineReducers({
  divider, rotation, settings, ui, dataFields
})

export default scanningAppReducers
