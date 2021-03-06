import { createStore,applyMiddleware,compose } from 'redux';
import rootReducer from '../reducers';
import { connectRouter } from 'connected-react-router'
import thunk from 'redux-thunk'
import { createHashHistory } from 'history';


export const history = createHashHistory()

const initialState = {}
const enhancers = []
const middleware = [thunk]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)


export default createStore(
  connectRouter(history)(rootReducer),
  initialState,
  composedEnhancers
)