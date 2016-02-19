import { curry, compose } from 'ramda';
import { checksum, readFileToBuffer } from './util/fileReader';
import { save, saveAttachment } from './db/docs';

const trace = curry((tag, x) => {
  console.log(tag, x);
  return x;
});

// getFilePath :: doc -> Either Error String
const getFilePath = doc => Either.fromNullable(doc.get('filePath'));

// getFileBuffer :: Either Error String -> Either Error (Task Error Buffer)
const getFileBuffer = compose(map(readFileToBuffer), getFilePath);

const persistDocument = curry((doc, buffer) => save(doc).chain(saveAttachment(buffer)));

const processDocument = doc => {
  doc = doc.set('_id', checksum(buffer));

  return compose(map(compose(chain(persistDocument(doc)), readFileToBuffer)), getFilePath);

  //need to check for filePath existing
  // return readFileToBuffer(doc.get('filePath')).chain(persistDocument(doc));
};


export { processDocument };
