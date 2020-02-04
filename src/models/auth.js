const conn = require('../configs/db');

module.exports = {
    register: (data) => {
        return new Promise((reslove, reject) => {
            conn.query("INSERT INTO user SET ?", data, (err, result) => {
                if (!err) {
                    reslove(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    }
}