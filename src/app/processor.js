import { curry, compose, chain } from 'ramda';
import { readFileToBuffer } from './util/fileReader';
import { save, update, saveAttachment } from './db/docs';

const trace = curry((tag, x) => {
  console.log(tag, x);
  return x;
});

const persistDocument = compose(chain(saveAttachment), chain(readFileToBuffer), save);

export { persistDocument };
