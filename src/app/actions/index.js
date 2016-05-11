import { retrieveSettings, save } from '../db/settings-dao'
import { saveFields, retrieveFields } from '../db/fields-dao'

export const DIVIDER_RESIZE = Symbol('DIVIDER_RESIZE')
export const moveDivider = position => ({ type: DIVIDER_RESIZE, position })

export const IMAGE_ROTATE = Symbol('IMAGE_ROTATE')
export const rotateViewerImage = rotation => ({ type: IMAGE_ROTATE, rotation })

export const TOGGLE_MODAL = Symbol('TOGGLE_MODAL')
export const toggleModal = () => ({ type: TOGGLE_MODAL })

export const DATABASE_ERROR = Symbol('DATABASE_ERROR')
export const dbError = err => ({ type: DATABASE_ERROR, err })

export const PERSIST_SETTINGS = Symbol('PERSIST_SETTINGS')
export const persistSettings = settings => dispatch => {
  save(settings).subscribe({
    next: data => dispatch(fetchSettings()),
    error: err => dispatch(dbError(err))
  })
}

export const RECEIVE_SETTINGS = Symbol('RECEIVE_SETTINGS')
export const receiveSettings = settings => ({ type: RECEIVE_SETTINGS, settings })

export const fetchSettings = () => dispatch => {
  retrieveSettings().subscribe({
    next: data => dispatch(receiveSettings(data)),
    error: err => {
      if(err.status === 404) return dispatch(receiveSettings({ srcDir: 'Enter a valid source path...' }))
      dispatch(dbError(err))
    }
  })
}

export const RECEIVE_FIELDS = Symbol('RECEIVE_FIELDS')
export const receiveFields = fieldData => ({ type: RECEIVE_FIELDS, fieldData })

export const PERSIST_FIELDS = Symbol('PERSIST_FIELDS')
export const persistFields = fieldData => dispatch => {
  saveFields(fieldData).subscribe({
    next: data => dispatch(receiveFields(data)),
    error: err => dispatch(dbError(err))
  })
}

export const TOGGLE_SHOWING_DATAFIELDS = Symbol('TOGGLE_SHOWING_DATAFIELDS')
export const toggleShowingDatafields = () => ({ type: TOGGLE_SHOWING_DATAFIELDS })

export const TOGGLE_SHOWING_ADDFIELD = Symbol('TOGGLE_SHOWING_ADDFIELD')
export const toggleShowingAddField = () => ({ type: TOGGLE_SHOWING_ADDFIELD })