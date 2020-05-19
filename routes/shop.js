const express = require('express');

const shopContoroller = require('../controllers/shop')

const router = express.Router();

router.get('/', shopContoroller.getIndex);

router.get('/products', shopContoroller.getProducts);

router.get('/cart', shopContoroller.getCart);

router.get('/checkout', shopContoroller.getCheckout);

module.exports = router