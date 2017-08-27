import { createStore as reduxCreateStore } from 'redux'
import todoApp from './reducers'

const createStore = () => reduxCreateStore(todoApp)
export default createStore
