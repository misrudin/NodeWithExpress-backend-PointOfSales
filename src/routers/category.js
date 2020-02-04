const express = require('express');
const auth = require('../helpers/auth')

const Router = express.Router();
const categoryController = require('../controllers/category');




Router
    .get('/', auth.verify, categoryController.getCategory)
    .post('/', auth.verify, categoryController.insertCategory)
    .patch('/:id_category', auth.verify, categoryController.updateCategory)
    .delete('/:id_category', auth.verify, categoryController.deleteCategory)


module.exports = Router;