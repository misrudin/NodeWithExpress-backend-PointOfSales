const express = require('express');
const auth = require('../helpers/auth')

const Router = express.Router();
const categoryController = require('../controllers/category');




Router.get('/', auth.verify, auth.cekrole, categoryController.getCategory);
Router.post('/', auth.verify, auth.cekrole, categoryController.insertCategory);
Router.patch('/:id_category', auth.verify, auth.cekrole, categoryController.updateCategory);
Router.delete('/:id_category', auth.verify, auth.cekrole, categoryController.deleteCategory);


module.exports = Router;