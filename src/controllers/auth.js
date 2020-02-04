// const modelLogin = require('../models/login');
const jwt = require('jsonwebtoken');
const conn = require('../configs/db');
const authModels = require('../models/auth');
const miscHelpers = require('../helpers/helpers');

module.exports = {
    loginUser: (req, res) => {
        const username = req.body.username;
        const password = req.body.password;
        conn.query("SELECT * FROM `user` WHERE username=? AND password= ?", [username, password], (err, result) => {
            if (!err) {
                if (result.length > 0) {
                    const token = jwt.sign({ result }, process.env.PRIVATE_KEY, { expiresIn: 60 * 60 * 24 })
                    res.json({
                        token: token,
                    });
                    // const data = {
                    //     id_user: result[0].id,
                    //     token: token
                    // }
                    // conn.query("INSERT INTO auth SET ?", data);
                } else {
                    res.send('Username or Password Wrong!');
                }
            } else {
                console.log(err);
            }
        });
    },

    // logout: (req, res) => {
    //     id_user = req.params.id_user
    //     conn.query("DELETE FROM auth WHERE id_user=?", id_user)
    //     res.send('logout')
    // },

    register: (req, res) => {
        const username = req.body.username;
        const password = req.body.password;
        const data = {
            username: username,
            password: password
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
    }
}