const productModel = require('../models/product');
const miscHElper = require('../helpers/helpers');
const conn = require('../configs/db')


module.exports = {
    getProduct: (req, res) => {
        productModel.getProduct()
            .then((result) => {
                miscHElper.response(res, result, 200)
            })
            .catch(err => console.log(err));
    },
    productDetail: (req, res) => {
        const id_product = req.params.id_product;
        productModel.productDetail(id_product)
            .then((result) => {
                res.json(result)
            })
            .catch(err => console.log(err));
    },
    insertProduct: (req, res) => {
        const { name, description, price, stok, id_category } = req.body;
        const date_created = new Date();
        const data = {
            name,
            description,
            price,
            stok,
            image: `http://localhost:4001/uploads/${req.file.filename}`,
            id_category,
            created_at: date_created
        }
        productModel.insertProduct(data)
            .then((result) => {
                miscHElper.response(res, result, 200)
            })
            .catch(err => res.json(err));
    },
    updateProduct: (req, res) => {
        const id_product = req.params.id_product;
        const date_update = new Date()
        const { name, description, price, stok, id_category } = req.body;
        const data = {
            name,
            description, //kalu sama key dan valuenya gini
            price,
            stok,
            image: `http://localhost:4001/uploads/${req.file.filename}`,
            id_category,
            update_at: date_update
        }

        conn.query("SELECT * FROM product_name where id =?", id_product, (err, result) => {
            if (!err) {
                if (result.length > 0) {
                    process.env.URL = result[0].image;
                    productModel.updateProduct(data, id_product)
                        .then((result) => {
                            res.json(result)
                        })
                        .catch(err => console.log(err));
                } else {
                    res.send('Eror!')
                }
            }
        })
    },
    deleteProduct: (req, res) => {
        const id_product = req.params.id_product;
        productModel.deleteProduct(id_product)
            .then((result) => {
                res.json(result)
            })
            .catch(err => console.log(err));
    },

    fillterProduct: (req, res) => {
        const keyword = req.body.keyword;
        productModel.fillterProduct(keyword)
            .then((result) => {
                miscHElper.response(res, result, 200)
            })
            .catch(err => console.log(err));
    },

    pagination: (req, res) => {
        const nomor = req.params.nomor;
        conn.query("SELECT COUNT(*) as total FROM product_name", (err, result) => {
            const total = result[0].total;//jumlah seluruh data

            if (nomor > 0) {
                productModel.pagination(nomor, total)
                    .then((result) => {
                        res.json(result);
                    })
                    .catch(err => console.log(err));
            } else {
                res.json(`Nothing Page ${nomor}`)
            }

        });
    },

    sortByCategory: (req, res) => {
        const name_category = req.params.name_category;
        productModel.sortByCategory(name_category)
            .then((result) => {
                miscHElper.response(res, result, 200)
            })
            .catch(err => console.log(err));
    },

    sortUpdate: (req, res) => {
        const date_update = req.params.dateUpdate;
        productModel.sortUpdate(date_update)
            .then((result) => {
                miscHElper.response(res, result, 200)
            })
            .catch(err => console.log(err))
    },

    addToCart: (req, res) => {
        const { id_user, id_product, qty } = req.body;
        const date_add = new Date();
        const data = {
            id_user,
            id_product,
            qty,
            date_add: date_add
        }
        if (data.qty < 1) {
            res.send('Cannot reduce!')
        } else {
            productModel.addToCart(data)
                .then((result) => {
                    miscHElper.response(res, result, 200)
                })
                .catch(err => console.log(err));
        }
    },

    addStok: (req, res) => {
        const id_product = req.params.id_product;
        const stokAdd = req.body.stok;
        productModel.addStok(stokAdd, id_product)
            .then((result) => {
                res.json(result)
            })
            .catch(err => console.log(err));
    }
}