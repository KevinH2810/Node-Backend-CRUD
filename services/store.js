const config = require('../config/config')

const books = [];
let currentId = 1;

let validToken = config.token;

module.exports = {
  books,
  getNextId: () => currentId++,
  validToken
};


// CRUD HERE