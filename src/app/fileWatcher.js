import chokidar from 'chokidar';

export default {
  watch(path) {

    const choker = chokidar.watch(path, {
      persistent: true, ignored: /[\/\\]\./
    });

    return {
      added(cb) {
        choker.on('add', path => cb(path));
      },
      
      changed(cb) {
        choker.on('change', path => cb(path));
      },
      
      deleted(cb) {
        choker.on('ulink', path => cb(path));
      },
      
      error(cb) {
        choker.on('error', err => cb(err));
      }
    }

  }
}

