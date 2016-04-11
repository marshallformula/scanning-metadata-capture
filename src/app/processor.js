import { readFileToBuffer, checksum } from './util/fileReader';
import { save, saveAttachment } from './db/docs-dao';

const processDocument = doc => {
  return readFileToBuffer(doc.filePath)
    .flatMap(buffer => {
      doc._id = checksum(buffer);

      return save(doc)
        .flatMap(saved => saveAttachment(buffer, Object.assign({}, doc, saved)));
    });
};

export { processDocument };
