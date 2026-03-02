require('dotenv').config()

module.exports = {
    app: {
        port: process.env.API_PORT || 3000,
    },
    token: {
        secret: process.env.SECRET_KEY,
    },
    salt: {
        salt: process.env.SALT_SYS || '',
        iteration: process.env.SALT_ITERATION || 0,
    }
}