const conn = require('../configs/db');

module.exports = {
    allPayment: (id_user) => {
        return new Promise((resolve, reject) => {
            conn.query("SELECT * FROM payment WHERE id_user=?", id_user, (err, result) => {
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