const jwt = require('jsonwebtoken');

module.exports = {
    verify: (req, res, next) => {
        const token = req.headers['my-token'];
        try {
            const decoded = jwt.verify(token, process.env.PRIVATE_KEY);
            console.log(decoded)
            next();
        } catch (err) {
            console.log(err)
            res.json({
                msg: 'Token infalid!'
            });
        }
    }
}