import PouchDB from 'pouchdb';

PouchDB.debug.enable('*');
export default new PouchDB('scanning-md');
