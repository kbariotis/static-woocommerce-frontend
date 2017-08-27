const path = require('path');
const WooCommerceAPI = require('woocommerce-api');

const WooCommerce = new WooCommerceAPI({
  url: 'http://localhost',
  port: 8080,
  consumerKey: 'ck_1023d446b12ad2375ab11681cfbab2044eeb77ac',
  consumerSecret: 'cs_f52bc64d85453f24ea95c01c53e5c237a5884ac3',
  wpAPI: true,
  version: 'wc/v2'
});

async function createPages ({ boundActionCreators, graphql }) {
  const { createPage } = boundActionCreators

  const productTemplate = path.resolve(`src/templates/product.js`)

  // const response = await WooCommerce.getAsync('products')
  // const products = JSON.parse(response.toJSON().body);

  const products = require('./../fixture.json');
  products.forEach(product => {
    createPage({
      path: product.slug,
      component: productTemplate,
      context: product,
    })
  })
}

exports.createPages = createPages
