const jwt = require('jsonwebtoken');

module.exports = {
    verify: (req, res, next) => {
        try {
            const decoded = jwt.verify(process.env.TOKEN, process.env.PRIVATE_KEY);
            process.env.SESSION = decoded.id_user;
            process.env.ROLE = decoded.role;
            next();
        } catch (err) {
            res.json({
                msg: 'Token infalid!',
                method: 'Please Login!'
            });
        }
    },
    cekrole: (req, res, next) => {
        if (process.env.ROLE == 1) {
            next();
        } else {
            res.json({
                msg: 'You canot access!'
            })
        }
    }
}