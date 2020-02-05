const express = require("express");
const auth = require("../helpers/auth");

const router = express.Router();
const controlerAuth = require("../controllers/auth");

router.post("/login", controlerAuth.loginUser); // router user
// .delete('/logout/:id_user', controlerAuth.logout)
router.post("/register", controlerAuth.register);

module.exports = router;
