import React from 'react'
import Link from 'gatsby-link'

import Main from './../components/Main';

const IndexPage = ({ data }) => <Main products={data.allSitePage.edges}/>

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allSitePage {
      edges {
        node {
          path
          layout
          context {
            id
            slug
          }
        }
      }
    }
  }
`;
