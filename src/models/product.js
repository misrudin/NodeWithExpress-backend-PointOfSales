const connection = require('../configs/db');
const fs = require('fs')

module.exports = {
    getProduct: () => {
        return new Promise((resolve, reject) => {
            connection.query("SELECT * FROM product_name ORDER BY name,created_at ASC", (err, result) => {
                if (!err) {
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            })
        })
    },


    productDetail: (id_product) => {
        return new Promise((resolve, reject) => {
            connection.query("SELECT product_name.*,category.nama_category FROM product_name INNER JOIN category ON product_name.id_category=category.id WHERE product_name.id = ?", id_product, (err, result) => {
                if (!err) {
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            })
        })
    },
    insertProduct: (data) => {
        return new Promise((resolve, reject) => {
            connection.query("INSERT INTO product_name SET ?", data, (err, result) => {
                if (!err) {
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            })
        })
    },
    updateProduct: (data, id_product) => {
        return new Promise((resolve, reject) => {
            connection.query("SELECT image FROM product_name WHERE id=?", id_product, (err, result) => {
                const img = result[0].image.replace('http://localhost:4001/', '');
                if (img == image) {
                    connection.query("UPDATE product_name SET ? WHERE id = ?", [data, id_product], (err, result) => {
                        if (!err) {
                            resolve(result);
                        } else {
                            reject(new Error(err));
                        }
                    })
                } else {
                    fs.unlink(img, (err) => {
                        if (err) throw err;
                    })
                    upload.single('image');
                    const newImage = `http://localhost:4001/${image}`;
                    connection.query("UPDATE product_name SET image=?,? WHERE id = ?", [newImage, data, id_product], (err, result) => {
                        if (!err) {
                            resolve(result);
                        } else {
                            reject(new Error(err));
                        }
                    })
                }


            })
        })
    },
    deleteProduct: (id_product) => {
        return new Promise((resolve, reject) => {
            connection.query("SELECT image FROM product_name WHERE id=?", id_product, (err, result) => {
                const img = result[0].image.replace('http://localhost:4001/', '');
                fs.unlink(img, (err) => {
                    if (err) throw err;
                })
            })
            connection.query("DELETE FROM product_name WHERE id = ?", id_product, (err, result) => {
                if (!err) {
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            })
        })
    },

    fillterProduct: (keyword) => {
        return new Promise((resolve, reject) => {
            connection.query("SELECT product_name.*, category.nama_category FROM product_name INNER JOIN category ON product_name.id_category=category.id WHERE product_name.name LIKE ?", '%' + keyword + '%', (err, result) => {
                if (!err) {
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            })
        })
    },

    pagination: (nomor) => {

        const dataPage = 2;// jumlah data per halaman
        const countAllData = connection.query("SELECT COUNT(*) as total FROM product_name", (err, result) => {
            return result[0].total;
        }) //jumlah seluruh data

        const page = countAllData / dataPage; // mengitung jumlah halaman

        const firstData = (dataPage * nomor) - dataPage; // menentukan awal data tiap halaman


        return new Promise((resolve, reject) => {
            connection.query("SELECT * FROM product_name ORDER BY name ASC LIMIT ?, ?", [firstData, dataPage], (err, result) => {
                if (!err) {
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            })
        })
    },

    sortByCategory: (name_category) => {
        return new Promise((resolve, reject) => {
            connection.query("SELECT category.nama_category, product_name.* FROM category INNER JOIN product_name ON category.id=product_name.id_category WHERE category.nama_category LIKE ?", '%' + name_category + '%', (err, result) => {
                if (!err) {
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            })
        })
    },
    // sortNewproduct: () => {
    //     console.log('halo')
    //     return new Promise((resolve, reject) => {
    //         connection.query("SELECT category.nama_category, product_name.* FROM category INNER JOIN product_name ON category.id=product_name.id_category ORDER BY created_at DESC", (err, result) => {
    //             if (!err) {
    //                 resolve(result);
    //             } else {
    //                 reject(new Error(err));
    //             }
    //         })
    //     })
    // },

    addToCart: (data) => {
        return new Promise((resolve, reject) => {

            connection.query("SELECT * FROM cart WHERE id_user=? AND id_product=?", [data.id_user, data.id_product], (err, result) => {
                if (!err) {
                    if (result.length > 0) {
                        connection.query("UPDATE cart SET qty=qty+? WHERE id_user=? AND id_product=?", [data.qty, data.id_user, data.id_product], (err, result) => {
                            if (!err) {
                                resolve(result);
                            } else {
                                reject(new Error(err));
                            }
                        })
                    } else {
                        connection.query("INSERT INTO cart SET ?", data, (err, result) => {
                            if (!err) {
                                resolve(result);
                            } else {
                                reject(new Error(err));
                            }
                        })
                    }
                }
            })





        })
    },

    addStok: (stok, id_product) => {
        const date_update = new Date()
        return new Promise((resolve, reject) => {
            connection.query("UPDATE product_name SET stok = stok + ?,update_at=? WHERE id = ?", [stok, date_update, id_product], (err, result) => {
                if (!err) {
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            })
        })
    }

}  