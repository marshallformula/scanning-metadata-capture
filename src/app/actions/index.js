import { retrieveSettings, save } from '../db/settings-dao'

export const DIVIDER_RESIZE = Symbol('DIVIDER_RESIZE')
export const moveDivider = position => ({ type: DIVIDER_RESIZE, position })

export const IMAGE_ROTATE = Symbol('IMAGE_ROTATE')
export const rotateViewerImage = rotation => ({ type: IMAGE_ROTATE, rotation })

export const DATABASE_ERROR = Symbol('DATABASE_ERROR')
export const dbError = err => ({ type: DATABASE_ERROR, err })

export const PERSIST_SETTINGS = Symbol('PERSIST_SETTINGS')
export const persistSettings = settings => dispatch => {
  save(settings).subscribe({
    next: data => dispatch(receiveSettings(Object.assign({}, settings, data))),
    error: err => dispatch(dbError(err))
  })
}

export const RECEIVE_SETTINGS = Symbol('RECEIVE_SETTINGS')
export const receiveSettings = settings => ({ type: RECEIVE_SETTINGS, settings })

export const FETCH_SETTINGS = Symbol('FETCH_SETTINGS')
export const fetchSettings = () => dispatch => {
  console.log('fetch settings dispatched')
  retrieveSettings().subscribe({
    next: data => dispatch(receiveSettings(data)),
    error: err => {
      if(err.status === 404) return dispatch(receiveSettings({ srcDir: 'Enter a valid path...' }))
      dispatch(dbError(err))

    }
  })
}
