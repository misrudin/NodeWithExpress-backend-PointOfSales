const conn = require('../configs/db');

module.exports = {
    getAllCart: (id_user) => {
        return new Promise((resolve, reject) => {
            conn.query("SELECT user.username,cart.*, product_name.name,product_name.image,product_name.price FROM cart INNER JOIN product_name ON product_name.id=cart.id_product INNER JOIN user ON user.id=cart.id_user WHERE cart.id_user=? ORDER BY date_add DESC", id_user, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },

    addQty: (qty, id_cart) => {
        return new Promise((resolve, reject) => {
            conn.query("UPDATE cart SET qty=qty + ? WHERE id = ?", [qty, id_cart], (err, result) => {
                if (!err) {
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            })
        })
    },
    minQty: (qty, id_cart) => {
        return new Promise((resolve, reject) => {
            conn.query("UPDATE cart SET qty=qty - ? WHERE id = ?", [qty, id_cart], (err, result) => {
                if (!err) {
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            })
        })
    },

    deleteCart: (id_cart) => {
        return new Promise((resolve, reject) => {
            conn.query("DELETE FROM cart WHERE id= ?", id_cart, (err, result) => {
                if (!err) {
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            })
        })
    }
}