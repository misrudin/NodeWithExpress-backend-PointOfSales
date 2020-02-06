const cartModel = require('../models/cart');
const miscHelper = require('../helpers/helpers');

module.exports = {
    getAllCart: (req, res) => {
        const id_user = process.env.SESSION;
        cartModel.getAllCart(id_user)
            .then((result) => {
                miscHelper.response(res, result, 200);
            })
            .catch(err => console.log(err))
    },
    addQty: (req, res) => {
        const id_cart = req.params.id_cart;
        const qty = req.body.qty;
        cartModel.addQty(qty, id_cart)
            .then((result) => {
                miscHelper.response(res, result, 200);
            })
            .catch(err => console.log(err));
    },
    minQty: (req, res) => {
        const id_cart = req.params.id_cart;
        const qty = req.body.qty;
        cartModel.minQty(qty, id_cart)
            .then((result) => {
                miscHelper.response(res, result, 200);
            })
            .catch(err => console.log(err));
    },

    deleteCart: (req, res) => {
        const id_cart = req.params.id_cart;

        cartModel.deleteCart(id_cart)
            .then((result) => {
                miscHelper.response(res, result, 200);
            })
            .catch(err => console.log(err));
    }


}//end code