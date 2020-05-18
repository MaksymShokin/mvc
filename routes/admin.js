const path = require('path');

const express = require('express');

const routeDir = require('../helpers/path');

const router = express.Router();

let products = [];

router.get('/add-product', (req, res, next) => {
  res.render('add-product', {
    title: 'Add product hbs', 
    path: 'admin/add-product',
    productCSS: true,
    formsCSS: true,
    activeAddProduct: true
  });
});

router.post('/add-product', (req, res, next) => {
  products.push({title: req.body.title})
  res.redirect('/');
});

module.exports = {
  routes: router,
  products: products
}
