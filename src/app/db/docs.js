import db from './db';
import R from 'ramda';

export function save(doc) {
  return new Task((rej, res) => {
    db.post(doc).then(res).catch(rej);
  });
}

export function update(doc) {
  return new Task((rej, res) => {
    db.put(doc).then(res).catch(rej);
  });
}

export function get(id) {
  return new Task((rej, res) => {
    db.get(id).then(res).catch(rej);
  });
}
