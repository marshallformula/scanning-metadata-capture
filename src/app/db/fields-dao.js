import db from './db'
import { Observable } from '@reactivex/rxjs';

const fieldsId = 'smsFieldsID'

const saveFields = fieldSettings => {
  if(!fieldSettings._id) {
    fieldSettings._id = fieldsId
  }
  return Observable.fromPromise(db.put(fieldSettings))
}

const retrieveFields = () => Observable.fromPromise(db.get(fieldsId))

export { saveFields, retrieveFields }
