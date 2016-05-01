import db from './db'
import { Observable } from '@reactivex/rxjs';

const settingsId = 'smsSettings'

const save = settings => {
  if(!settings._id) {
    settings._id = settingsId
  }
  return Observable.fromPromise(db.put(settings))
}

const retrieveSettings = () => Observable.fromPromise(db.get(settingsId))

export { save, retrieveSettings }
