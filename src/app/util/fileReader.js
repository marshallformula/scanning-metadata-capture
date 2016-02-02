import Task from 'data.task';
import { readFile } from 'fs';

export function readFileToBuffer(doc) {
  return new Task((rej, res) => {
    readFile(doc.filePath, (err, buffer) => {
      if(err) return rej(err);
      res({ doc, buffer });
    });
  });
}
