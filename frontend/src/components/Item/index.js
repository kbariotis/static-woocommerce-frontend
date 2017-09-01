import React, { Component } from 'react';
import Link from 'gatsby-link';

import './styles.sass';

const Item = (props) => {
  console.log(props)
  return(
    <div className="item">
      <Link to={props.id}>
        <div className="content"></div>
      </Link>
    </div>
  );
}

export default Item;
