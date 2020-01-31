const express = require('express');
const multer = require('multer');
const auth = require('../helpers/auth')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        cb(null, new Date().toISOString().replace(/:/g, "-") + file.originalname)
    }
})
const upload = multer({
    storage
})

const Router = express.Router();
const productController = require('../controllers/product');




Router
    .get('/', auth.verify, productController.getProduct)
    .get('/:id_product', productController.productDetail)
    .post('/', upload.single('image'), productController.insertProduct)
    .patch('/:id_product', upload.single('image'), productController.updateProduct)
    .delete('/:id_product', productController.deleteProduct)
    .post('/login', productController.loginUser)



module.exports = Router;