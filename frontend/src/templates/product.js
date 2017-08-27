import React from 'react'
import Link from 'gatsby-link'
import { connect } from 'react-redux'
import { addProduct } from './../actions'

const ProductTemplate = ({ context, onAddToCartClick, productsCount}) =>
  <div>
    <h1>{context.name}</h1>
    <h1>{productsCount}</h1>
    <div dangerouslySetInnerHTML={{ __html: context.description }} />
    <button onClick={() => onAddToCartClick(1)}>Add to cart</button>
    <Link to="/page-2/">Go to page 2</Link>
  </div>

const mapStateToProps = (state, ownProps) => ({
  context: ownProps.pathContext,
  productsCount: state.products.length,
});

const mapDispatchToProps = dispatch => {
  return {
    onAddToCartClick: id => {
      dispatch(addProduct(id))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductTemplate)
