const productModel = require('../models/product');
const miscHElper = require('../helpers/helpers');
const jwt = require('jsonwebtoken');


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
            .catch(err => console.log(err));
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
        productModel.updateProduct(data, id_product)
            .then((result) => {
                res.json(result)
            })
            .catch(err => console.log(err));
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
        productModel.pagination(nomor)
            .then((result) => {
                res.json(result)
            })
            .catch(err => console.log(err));
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
        productModel.addToCart(data)
            .then((result) => {
                miscHElper.response(res, result, 200)
            })
            .catch(err => console.log(err));
    },

    addStok: (req, res) => {
        const id_product = req.params.id_product;
        const stok = req.body.stok;
        productModel.addStok(stok, id_product)
            .then((result) => {
                res.json(result)
            })
            .catch(err => console.log(err));
    }
}