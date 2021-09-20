var controllers = require('./controllers.js');
var router = require('express').Router();


//Connect controller methods to their corresponding routes
router.get('/allProducts', controllers.getDB);
router.post('/allProducts', controllers.postDB);
router.patch('/allProducts', controllers.patchDB);
router.delete('/allProducts', controllers.deleteDB);

//external API call
router.get(`/fetchAPI`, controllers.getAPIUPC);




module.exports = router;