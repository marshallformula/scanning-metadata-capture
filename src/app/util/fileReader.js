import Rx from '@reactivex/rxjs';
import { readFile } from 'fs';
import { createHash } from 'crypto';


// readFileToBuffer :: doc -> Observable
const readFileToBuffer = file => Rx.Observable.bindNodeCallback(readFile)(file);

function checksum(data, algorithm = 'md5', encoding = 'hex') {
  return createHash(algorithm)
    .update(data, 'utf8')
    .digest(encoding);
}

const fileExists = file => Rx.Observable.bindNodeCallback(stat)(file);

export { readFileToBuffer, checksum, fileExists };
