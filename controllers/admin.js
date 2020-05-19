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
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(title, imageUrl, price, description);

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