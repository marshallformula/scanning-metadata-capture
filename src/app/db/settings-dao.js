import db from './db'
import { Observable } from '@reactivex/rxjs';

const save = settings => {
  settings._id = 'smcSettings'
  return Observable.fromPromise(db.put(settings))
}

export { save }
