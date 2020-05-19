const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/add-product', {
    title: 'Add product', 
    path: 'admin/add-product',
    productCSS: true,
    formsCSS: true,
    activeAddProduct: true
  });
}

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title);

  product.save();
  res.redirect('/products');
}

exports.getEditProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    title: 'Edit product',
    path: 'admin/add-product',
    productCSS: true,
    formsCSS: true,
    activeAddProduct: true,
  });
};

exports.getProducts = (req, res, next) => {
  res.render('admin/products', {
    title: 'Products',
    path: 'admin/products',
    productCSS: true,
    formsCSS: true,
    activeAddProduct: true,
  });
};