const conn = require('../configs/db');

module.exports = {
    checkoutAll: (id_user) => {
        return new Promise((reslove, reject) => {
            conn.query("SELECT * FROM cart where id_user= ?", id_user, (err, result) => {
                if (!err) {
                    if (result.length > 0) {
                        result.forEach((e) => {
                            conn.query("SELECT price,stok,name FROM product_name WHERE id=?", e.id_product, (err, resultp) => {
                                if (resultp.length > 0) {
                                    resultp.forEach((i) => {
                                        if (i.stok < 1 || i.stok < e.qty) {
                                            console.log(`Lack of: ${i.name} Stock!`);
                                            reslove('Some products cannot be fulfilled!');
                                        } else {
                                            const total = e.qty * i.price
                                            const date_pay = new Date();
                                            const data = {
                                                date_pay: date_pay,
                                                id_user: id_user,
                                                id_product: e.id_product,
                                                qty: e.qty,
                                                total: total
                                            }
                                            conn.query("INSERT INTO payment SET ?", data);
                                            conn.query("DELETE FROM cart WHERE id_user=? AND id_product=?", [id_user, e.id_product]);
                                            conn.query("UPDATE product_name SET stok=stok - ? WHERE id=?", [e.qty, e.id_product]);
                                            console.log(`Checkout: ${i.name} Success!`);
                                            reslove('Checkout All Success');
                                        }
                                    });
                                }
                            });
                        });
                    } else {
                        reslove("Cart is Empty!");
                    }
                } else {
                    reject(new Error(err));
                }
            })
        })
    },

    checkoutById: (id_cart, id_user) => {
        const pesan = [];
        return new Promise((reslove, reject) => {
            conn.query("SELECT * FROM cart where id= ?", id_cart, (err, result) => {
                if (!err) {
                    if (result.length > 0) {
                        result.forEach((e) => {
                            conn.query("SELECT price,stok,name FROM product_name WHERE id=?", e.id_product, (err, resultp) => {
                                if (resultp.length > 0) {
                                    resultp.forEach((i) => {
                                        if (i.stok < 1 || i.stok < e.qty) {
                                            console.log(`Lack of: ${i.name} Stock!`);
                                            reslove(`${i.name} cannot be fulfilled!`);
                                        } else {
                                            const total = e.qty * i.price
                                            const date_pay = new Date();
                                            const data = {
                                                date_pay: date_pay,
                                                id_user: id_user,
                                                id_product: e.id_product,
                                                qty: e.qty,
                                                total: total
                                            }
                                            conn.query("INSERT INTO payment SET ?", data);
                                            conn.query("DELETE FROM cart WHERE id=?", id_cart)
                                            conn.query("UPDATE product_name SET stok=stok - ? WHERE id=?", [e.qty, e.id_product]);
                                            console.log(`Checkout: ${i.name} Success!`);
                                            reslove(`Checkout ${i.name} Success`);
                                        }
                                    });
                                }
                            });
                        });
                    } else {
                        reslove("Cart Not found");
                    }
                } else {
                    reject(new Error(err));
                }
            });
        });
    }


};



// my function

const getCart = () => {

}