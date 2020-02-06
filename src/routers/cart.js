const express = require('express');
const auth = require('../helpers/auth');

const router = express.Router();
const cartController = require('../controllers/cart');
const checkoutControler = require('../controllers/checkout');

router.get('/', auth.verify, cartController.getAllCart);
router.patch('/add/:id_cart', auth.verify, cartController.addQty);
router.patch('/min/:id_cart', auth.verify, cartController.minQty);
router.delete('/:id_cart', auth.verify, cartController.deleteCart);

//checkout
router.get('/checkout/all/', auth.verify, checkoutControler.checkoutAll);
router.get('/checkout/:id_cart', auth.verify, checkoutControler.checkoutById);


module.exports = router;