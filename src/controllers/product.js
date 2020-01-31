const productModel = require('../models/product')
const miscHElper = require('../helpers/helpers')
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
        // console.log(req.file.filename);
        const { name, description, price, stok, id_category } = req.body;
        const data = {
            name,
            description,
            price,
            stok,
            image: `http://localhost:4001/uploads/${req.file.filename}`,
            id_category,
        }
        productModel.insertProduct(data)
            .then((result) => {
                miscHElper.response(res, result, 200)
            })
            .catch(err => console.log(err));
    },
    updateProduct: (req, res) => {
        const id_product = req.params.id_product;
        const { name, description, price, stok, id_category } = req.body;
        const data = {
            name,
            description, //kalu sama key dan valuenya gini boy
            price,
            stok,
            image: `http://localhost:4001/uploads/${req.file.filename}`,
            id_category
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
    loginUser: (req, res) => {
        const token = jwt.sign({ id: 1, name: 'udin' }, process.env.PRIVATE_KEY)
        res.json({
            token: token
        })
    }
}