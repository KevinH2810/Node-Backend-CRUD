const { books, getNextId } = require("./store");

exports.create = ({ title, author, year }) => {
    const newBook = {
        id: getNextId(),
        title,
        author,
        year: year ?? null
    };

    books.push(newBook);
    return newBook;
};

exports.getAll = ({ author, page, limit } = {}) => {
    let result = [...books];

    // 🔹 Filter by author
    if (author) {
        result = result.filter(
            book =>
                book.author &&
                book.author.toLowerCase() === author.toLowerCase()
        );
    }

    // 🔹 Pagination
    if (page && limit) {
        const start = (page - 1) * limit;
        const end = start + limit;
        result = result.slice(start, end);
    }

    return result;
};

exports.getById = (id) => {
    return books.find(book => book.id === id);
};

exports.update = (id, updateData) => {
    const book = books.find(book => book.id === id);

    if (!book) {
        return null;
    }

    if (updateData.title !== undefined) {
        book.title = updateData.title;
    }

    if (updateData.author !== undefined) {
        book.author = updateData.author;
    }

    if (updateData.year !== undefined) {
        book.year = updateData.year;
    }

    return book;
};

exports.remove = (id) => {
    const index = books.findIndex(book => book.id === id);

    if (index === -1) {
        return false;
    }

    books.splice(index, 1);
    return true;
};