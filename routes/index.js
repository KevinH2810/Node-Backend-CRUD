  module.exports = function(app) {
    app.use("/", require('./healthcheck'));
    app.use("/", require('./echo'));
    app.use("/books", require('./books'))
    app.use("/auth", require('./auth'))
  }