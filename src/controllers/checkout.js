const checkoutModel = require('../models/checkout');
const miscHelper = require('../helpers/helpers');

module.exports = {
    checkoutAll: (req, res) => {
        const id_user = process.env.SESSION;
        checkoutModel.checkoutAll(id_user)
            .then((result) => {
                miscHelper.response(res, result, 200)
            })
            .catch(err => console.log(err))
    },

    checkoutById: (req, res) => {
        const id_cart = req.params.id_cart;
        const id_user = process.env.SESSION;
        checkoutModel.checkoutById(id_cart, id_user)
            .then((result) => {
                miscHelper.response(res, result, 200)
            })
            .catch(err => console.log(err))
    }
}