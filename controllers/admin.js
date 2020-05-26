const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    title: 'Add product',
    path: 'admin/add-product'
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(title, imageUrl, price, description);

  product.save();
  res.redirect('/products');
};

exports.getEditProduct = (req, res, next) => {
  const isEditMode = req.query.edit;

  console.log(isEditMode)
  
  res.render('admin/edit-product', {
    title: 'Edit product',
    path: 'admin/edit-product',
    editing: isEditMode
  });
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('admin/products', {
      title: 'Products',
      products: products,
      path: 'admin/products',
      productCSS: true,
      formsCSS: true,
      activeAddProduct: true,
    });
  });
};
