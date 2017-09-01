import React from 'react'
import Link from 'gatsby-link'
import { connect } from 'react-redux'
import { addProduct } from './../actions'
import ItemPage from './../components/ItemPage';

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
export default connect(mapStateToProps, mapDispatchToProps)(ItemPage)
