/*
 * action types
 */

export const ADD_PRODUCT = 'ADD_PRODUCT'

/*
 * action creators
 */

export function addProduct(productId) {
  return { type: ADD_PRODUCT, productId }
}
