import { combineReducers } from 'redux'
import {
  ADD_PRODUCT,
} from './actions'

function products(state = [], action) {
  switch (action.type) {
    case ADD_PRODUCT:
      return [
        ...state,
        {
          id: action.productId
        }
      ]
    default:
      return state
  }
}

const todoApp = combineReducers({
  products
})

export default todoApp
