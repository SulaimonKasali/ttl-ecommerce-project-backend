const express = require ('express');
const ProductController = require('../controllers/ProductController')
const router = express.Router();

router.get('/', function(req,res){
    res.send('Home');
});

router.get('/products', ProductController.getProducts);
router.get('/products/:id', ProductController.getProductById);
router.post('/products', ProductController.createProduct);    
router.patch('/products', ProductController.updateProduct);
router.delete('/products/:id', ProductController.deleteProduct);


module.exports  = router;