import db from './db';
import { curry } from 'ramda';
import { extname, basename } from 'path';
import Task from 'data.task';

const save = doc => {
  return new Task((rej, res) => {
    db.post(doc).then(saved => {
      console.log('SAVED IS ', saved);
      res(Object.assign({}, saved, doc));
    }).catch(rej);
  });
};

const update = doc => {
  return new Task((rej, res) => db.put(doc).then(res).catch(rej));
};

const get = id => {
  return new Task((rej, res) => db.get(id).then(res).catch(rej));
};

const getAttachment = curry((docId, attachmentId) => {
  return new Task((rej, res) => db.getAttachment(docId, attachmentId).then(res).catch(rej));
});

const saveAttachment = ({ doc, buffer }) => {
  const fileName = basename(doc.filePath);
  const type = `image/${extname(fileName).substring(1).toLowerCase()}`;
  return new Task((rej, res) => {
    db.putAttachment(doc.id, fileName, doc.rev, buffer, type).then(res).catch(rej);
  });
};

export { save, update, get, getAttachment, saveAttachment };
