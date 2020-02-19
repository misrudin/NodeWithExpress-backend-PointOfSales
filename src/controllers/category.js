const categoryModel = require('../models/category')
const miscHElper = require('../helpers/helpers')

module.exports = {
    getCategory: (req, res) => {
        categoryModel.getCategory()
            .then((result) => {
                miscHElper.response(res, result, 200)
            })
            .catch(err => console.log(err));
    },
    insertCategory: (req, res) => {
        const nama = req.body.category;
        const data = {
            nama_category: nama
        }

        categoryModel.insertCategory(data)
            .then((result) => {
                const dataResult={
                    id: result.insertId,
                    nama_category:nama
                }
                miscHElper.response(res, dataResult, 200)
            })
            .catch(err => console.log(err));
    },
    updateCategory: (req, res) => {
        const id_category = req.params.id_category;
        const nama = req.body.category;
        const data = {
            nama_category: nama
        }

        categoryModel.updateCategory(data, id_category)
            .then((result) => {
                miscHElper.response(res, result, 200)
            })
            .catch(err => console.log(err))
    },

    deleteCategory: (req, res) => {
        const id_category = req.params.id_category;

        categoryModel.deleteCategory(id_category)
            .then((result) => {
                miscHElper.response(res, result, 200)
            })
            .catch(err => console.log(err));
    }

}