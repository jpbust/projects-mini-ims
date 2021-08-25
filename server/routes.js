var controllers = require('./controllers.js');
var router = require('express').Router();


//Connect controller methods to their corresponding routes
router.get('/allProducts', controllers.get);

// router.get(`/products/:product_id`, controller.productFeatures.get);

// router.get(`/products/:product_id/styles`, controller.productStyles.get);

// router.get(`/products/:product_id/related`, controller.getRelated.get);





module.exports = router;