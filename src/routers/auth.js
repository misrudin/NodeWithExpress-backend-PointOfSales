const express = require("express");
const auth = require("../helpers/auth");

const router = express.Router();
const controlerAuth = require("../controllers/auth");

router.post("/login", controlerAuth.loginUser); // router user
// .delete('/logout/:id_user', controlerAuth.logout) //pr
router.post("/register", controlerAuth.register);
router.get("/user", auth.verify, controlerAuth.getAll)

module.exports = router;
