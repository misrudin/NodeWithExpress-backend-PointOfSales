const conn = require('../configs/db');

module.exports = {
    allPayment: (id_user) => {
        return new Promise((resolve, reject) => {
            conn.query("SELECT payment.id,payment.date_pay,user.username,product_name.name,payment.qty,payment.total FROM payment INNER JOIN user ON user.id=payment.id_user INNER JOIN product_name ON product_name.id=payment.id_product WHERE payment.id_user=?", id_user, (err, result) => {
                if (!err) {
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            });
        });
    },

    deletePayment: (id_payment) => {
        return new Promise((resolve, reject) => {
            conn.query("DELETE FROM payment WHERE id=?", id_payment, (err, result) => {
                if (!err) {
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            });
        });
    }
} //end code