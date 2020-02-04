const express = require('express');
const auth = require('../helpers/auth');

const router = express.Router();
const controlerAuth = require('../controllers/auth')

router
    .post('/login', controlerAuth.loginUser)// router user
    .post('/logout', controlerAuth.logout)
    .post('/register', controlerAuth.register)
// .patch('/edit/:id_user', controlerAuth.edit)

module.exports = router;