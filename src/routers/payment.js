const express = require('express');
const auth = require('../helpers/auth');

const router = express.Router();
const paymentController = require('../controllers/payment');

router.get('/', auth.verify, paymentController.allPayment);
router.delete('/:id_payment', auth.verify, paymentController.deletePayment);


module.exports = router;