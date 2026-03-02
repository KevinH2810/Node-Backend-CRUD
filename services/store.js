const config = require('../config/config')

const books = [];
let currentId = 1;

module.exports = {
  books,
  getNextId: () => currentId++,
};


// CRUD HERE