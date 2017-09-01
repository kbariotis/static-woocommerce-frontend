import React, { Component } from 'react';
import './styles.sass';
import Item from '../Item/index';

const Homepage = ({products}) => {
  return (
    <main className="main">
      {products.filter(({ node }) => !!node.context.id).map(({ node }) => <Item key={node.context.id} id={node.context.slug} />)}
    </main>
  );
}

export default Homepage;
