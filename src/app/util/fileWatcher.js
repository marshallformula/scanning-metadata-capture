import chokidar from 'chokidar';
import { Observable } from '@reactivex/rxjs'

export default {
  watch(path) {

    const choker = chokidar.watch(path, {
      persistent: true, ignored: /[\/\\]\./
    });

    return Observable.create(observer => {
      choker.on('add', file => observer.next({event: 'add', file}))
      choker.on('change', file => observer.next({event: 'change', file}))
      choker.on('unlink', file => observer.next({event: 'unlink', file}))
      choker.on('error', err => observer.error(err))

      return () => choker.close()
    })

  }
}

