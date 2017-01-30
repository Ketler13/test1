import { createStore, applyMiddleware, compose } from 'redux'
import reducer from '../reducer'
import request from '../middlewares/request'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const enhancer = composeEnhancers(applyMiddleware(request))

const store = createStore(reducer, {}, enhancer)
window.store = store

export default store
