const express = require('express');
const auth = require('../helpers/auth');

const router = express.Router();
const paymentController = require('../controllers/payment');

router.get('/', auth.verify, paymentController.allPayment);
router.delete('/:id_payment', auth.verify, paymentController.deletePayment);

router.get('/all',auth.verify, paymentController.incomeToday);

router.get('/detail/:faktur', auth.verify, paymentController.detailPayment)


module.exports = router;