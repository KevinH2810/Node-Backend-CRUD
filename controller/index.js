// const CitizenController = require('./CitizenController')
const AuthController = require('./AuthController')
const MiscController = require('./MiscController')
const BookController = require('./BookController')

module.exports = {
    // citizenController: new CitizenController(),
    authController: new AuthController(),
    miscController: new MiscController(),
    bookController: new BookController(),
}