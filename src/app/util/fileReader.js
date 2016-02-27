import { Observable } from 'rx';
import { readFile } from 'fs';
import { createHash } from 'crypto';


// readFileToBuffer :: doc -> Observable
const readFileToBuffer = file => Observable.fromNodeCallback(readFile)(file);

function checksum(data, algorithm = 'md5', encoding = 'hex') {
  return createHash(algorithm)
    .update(data, 'utf8')
    .digest(encoding);
}

const fileExists = file => Observable.fromNodeCallback(stat)(file);

export { readFileToBuffer, checksum, fileExists };