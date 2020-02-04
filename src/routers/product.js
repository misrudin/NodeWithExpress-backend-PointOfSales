const express = require('express');
const multer = require('multer');
const auth = require('../helpers/auth')
const cors = require('cors');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        // cb(null, new Date().toISOString().replace(/:/g, "-") + '-' + file.originalname)
        cb(null, file.originalname)
    }
})
const upload = multer({
    storage
})

const Router = express.Router();
const productController = require('../controllers/product');
const corsOptions = {
    origin: 'http://localhost/api/v1',
}




Router

    .get('/', cors(corsOptions), auth.verify, productController.getProduct) //get all prod (sort by name)
    .get('/:id_product', cors(corsOptions), productController.productDetail) // get by id
    .post('/', upload.single('image'), cors(corsOptions), auth.verify, productController.insertProduct) //insert product + upload image
    .patch('/:id_product', cors(corsOptions), auth.verify, productController.updateProduct) // update product + image
    .delete('/:id_product', cors(corsOptions), auth.verify, productController.deleteProduct) //delete by id
    .get('/page/:nomor', cors(corsOptions), auth.verify, productController.pagination) //pagination(sort by name)
    .get('/category/:name_category', cors(corsOptions), auth.verify, productController.sortByCategory) //sort by category
    .post('/fillter', cors(corsOptions), auth.verify, productController.fillterProduct) //filter by name

    .post('/addtocart', cors(corsOptions), auth.verify, productController.addToCart) //add to cart
    .patch('/addstok/:id_product', cors(corsOptions), auth.verify, productController.addStok) //add stok

// .get('/update', auth.verify, productController.sort) //berdasarkan tanggal update


module.exports = Router; 