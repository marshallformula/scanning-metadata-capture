import Task from 'data.task';
import { readFile } from 'fs';
import { createHash } from 'crypto';

export function readFileToBuffer(doc) {
  return new Task((rej, res) => {
    readFile(doc, (err, buffer) => {
      if (err) return rej(err);
      res(buffer);
    });
  });
}

export function checksum(data, algorithm = 'md5', encoding = 'hex') {
  return createHash(algorithm)
    .update(data, 'utf8')
    .digest(encoding);
}
