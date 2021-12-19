import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { RootState } from './types'

import notificationReducer from './ducks/reducers/notificationReducer'
import ReposReducer from './ducks/reducers/ReposReducer'
import LoaderReducer from './ducks/reducers/LoaderReducer'

const reducer = combineReducers<RootState>({
  notification: notificationReducer,
  repos: ReposReducer,
  isLoader: LoaderReducer,
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store
