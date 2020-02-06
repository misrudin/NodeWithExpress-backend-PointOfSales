const express = require('express');
const multer = require('multer');
const auth = require('../helpers/auth');
const cors = require('cors');
const Router = express.Router();

const productController = require('../controllers/product');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');
    },
    filename: function (req, file, cb) {
        cb(null, new Date().toISOString().replace(/:/g, "-") + '-' + file.originalname)
    }
})

const upload = multer({ //multer settings
    storage: storage,
    fileFilter: function (req, file, callback) {
        const ext = path.extname(file.originalname);
        if (ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
            return callback(new Error('Only images are allowed'))
        }
        callback(null, true)
    },
    limits: {
        fileSize: 1024 * 1024
    }
}).single('image');

const corsOptions = {
    origin: 'http://localhost:4001/api/v1',
    optionsSuccessStatus: 200
};

Router.get('/', cors(corsOptions), productController.getProduct); //get all prod
Router.get('/:id_product', cors(corsOptions), productController.productDetail); // get by id
Router.post('/', cors(corsOptions), auth.verify, auth.cekrole, upload, productController.insertProduct); //insert product + upload image
Router.patch('/:id_product', cors(corsOptions), auth.verify, auth.cekrole, upload, productController.updateProduct); // update product + image
Router.delete('/:id_product', auth.cekrole, cors(corsOptions), auth.verify, auth.cekrole, productController.deleteProduct); //delete by id
Router.get('/page/:nomor', cors(corsOptions), productController.pagination); //pagination
Router.get('/category/:name_category', cors(corsOptions), productController.sortByCategory); //sort by category
Router.post('/filter', cors(corsOptions), productController.fillterProduct); //filter by name

Router.post('/addtocart', cors(corsOptions), auth.verify, productController.addToCart); //add to cart
Router.patch('/addstok/:id_product', auth.cekrole, cors(corsOptions), auth.verify, auth.cekrole, productController.addStok); //add stok

Router.get('/update/:dateUpdate', productController.sortUpdate) //sort by date update

module.exports = Router; 