if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)
import { injectAsyncReducer } from '../../store'

export default function createRoutes (store) {
  return {
    path: 'Video',
    getComponents (location, cb) {
      require.ensure([
        './containers/VideoLayout',
        './reducer'
      ], (require) => {
        let PostPage = require('./containers/VideoLayout').default
        let postReducer = require('./reducer').default
        injectAsyncReducer(store, 'Video', postReducer)
        cb(null, PostPage)
      })
    }
  }
}
