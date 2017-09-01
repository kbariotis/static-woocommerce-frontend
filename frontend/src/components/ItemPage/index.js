import React, { Component } from 'react';
import Link from 'gatsby-link';
import './styles.sass';

const ItemPage = ({ context, onAddToCartClick, productsCount }) => {
  return (
    <div className="itemPageWrapper">
      <div className="itemImgWrapper" />
      <div className="itemInfoWrapper">
        <Link className="backLink" to="/">
          <span className="small">
            <svg fill="#000000" height="13" viewBox="0 0 18 15" width="13" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 10l5 5 5-5z"/>
              <path d="M0 0h24v24H0z" fill="none"/>
            </svg>
          </span>All Items
        </Link>
        <h3 className="itemName">{context.name}</h3>
        <p className="itemCost frm">$40</p>
        <p className="description" dangerouslySetInnerHTML={{ __html: context.description }} />
        <p className="stock">{productsCount} <span>In stock</span></p>
        <p className="seller frm">By <span>Arshad Khan</span></p>
        <button
          onClick={() => onAddToCartClick(context.id)}
          className="reqTradeBtn normalBtn">
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ItemPage;
