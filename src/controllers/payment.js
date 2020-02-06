const paymentModel = require('../models/payment');
const miscHelper = require('../helpers/helpers');

module.exports = {
    allPayment: (req, res) => {
        const id_user = process.env.SESSION;
        paymentModel.allPayment(id_user)
            .then((result) => {
                miscHelper.response(res, result, 200)
            })
            .catch(err => console.log(err))
    },
    deletePayment: (req, res) => {
        const id_payment = req.params.id_payment;
        paymentModel.deletePayment(id_payment)
            .then((result) => {
                miscHelper.response(res, result, 200)
            })
            .catch(err => console.log(err))
    }
}