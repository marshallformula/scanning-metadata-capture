import db from './db';
import { Observable } from '@reactivex/rxjs';
import { extname, basename } from 'path';

const fromPromise = Observable.fromPromise;

const save = doc => fromPromise(db.put(doc));

const get = id => fromPromise(db.get(id));

const getAttachment = (docId, attachmentId) => fromPromise(db.getAttachment(docId, attachmentId));

const saveAttachment = (buffer, doc) => {
  console.log('trying to save attachment for ', doc);
  const fileName = basename(doc.filePath);
  const type = `image/${extname(fileName).substring(1).toLowerCase()}`;
  return fromPromise(db.putAttachment(doc.id, fileName, doc.rev, buffer, type));
};

const all = (opts) => fromPromise(db.allDocs(opts));

export { save, get, getAttachment, saveAttachment, all };
