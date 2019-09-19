const db = require('./connect');

class User {
    register(user) {
        return new Promise(async (resolve, reject) => {
           let sql = 'INSERT INTO user SET ?';
           try {
               let result = await db.query(sql, user);
               resolve(result);
           } catch(err) {
               reject(err);
           }
        });
    }

    login(user) {
        return new Promise(async (resolve, reject) => {
            let sql = 'SELECT * FROM user WHERE ?';
            try {
                let result = await db.query(sql, user);
                resolve(result);
            } catch(err) {
                reject(err);
            }
        });
    }
}

module.exports = new User();