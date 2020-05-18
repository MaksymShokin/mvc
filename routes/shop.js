const path = require('path');

const express = require('express');

const routeDir = require('../helpers/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
  console.log(adminData.products)
  res.render('shop', {
    products: adminData.products,
    title: 'Shop', 
    path: '/', 
    hasProducts: adminData.products.length > 0,
    productCSS: true,
    activeShop: true
  });
});

module.exports = router