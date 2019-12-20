const express = require ('express');
const ProductController = require('../controllers/ProductController');
const CategoriesController = require('../controllers/CategoriesController');
const router = express.Router();

router.get('/', function(req,res){
    res.send('Home');
});

//Product routes
router.get('/products', ProductController.getProducts);
router.get('/products/:id', ProductController.getProductById);
router.post('/products', ProductController.createProduct);    
router.patch('/products', ProductController.updateProduct);
router.delete('/products/:id', ProductController.deleteProduct);


//Caegories routes
router.post('/categories',CategoriesController.createCategory);
router.get('/categories',CategoriesController.getCategories);

module.exports = router