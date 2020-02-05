const jwt = require('jsonwebtoken');
const conn = require('../configs/db');
const authModels = require('../models/auth');
const miscHelpers = require('../helpers/helpers');
const bcrypt = require('bcryptjs');

module.exports = {
    loginUser: (req, res) => {
        const username = req.body.username;
        conn.query("SELECT * FROM `user` WHERE username=?", username, (err, result) => {
            if (!err) {
                if (result.length > 0) {
                    const passwordInput = req.body.password;
                    const passwordHash = result[0].password;
                    const id_user = result[0].id
                    bcrypt.compare(passwordInput, passwordHash, function (err, resPass) {
                        if (resPass) {
                            const token = jwt.sign({ id_user }, process.env.PRIVATE_KEY, { expiresIn: 60 * 60 * 24 })
                            res.json({
                                token: token,
                            });
                        } else {
                            res.send('Password Wrong!')
                        }
                        // const data = {
                        //     id_user: result[0].id,
                        //     token: token
                        // }
                        // conn.query("INSERT INTO auth SET ?", data);
                    });
                } else {
                    res.send('Username not found, please register!');
                }
            } else {
                console.log(err);
            }
        })

    },

    // logout: (req, res) => {
    //     id_user = req.params.id_user
    //     conn.query("DELETE FROM auth WHERE id_user=?", id_user)
    //     res.send('logout')
    // },

    register: (req, res) => {
        const username = req.body.username;
        const password = req.body.password;
        bcrypt.genSalt(10, function (err, salt) {
            bcrypt.hash(password, salt, function (err, hash) {
                console.log(hash);
                const data = {
                    username: username,
                    password: hash
                }
                conn.query("SELECT * FROM `user` WHERE username=?", username, (err, result) => {
                    if (!err) {
                        if (result.length > 0) {
                            res.json('username already registered!');
                        } else {
                            authModels.register(data)
                                .then((result) => {
                                    miscHelpers.response(res, result, 200);
                                })
                                .catch(err => console.log(err));
                        }
                    }
                });


            });
        });
    }
}