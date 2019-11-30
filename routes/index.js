const express = require ('express');
const ProductController = require('../controllers/ProductController')
const router = express.Router();

router.get('/', function(req,res){
    res.send('Home');
});

router.get('/products', ProductController.getProducts);
    


module.exports  = router;