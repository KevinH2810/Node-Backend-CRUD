const BaseController = require("./BaseController");
const booksService = require("../services/books");

module.exports = class BooksController extends BaseController {

    constructor(service) {
        super(service);
    }

    async createBook(req, res) {
        const { title, author, year } = req.body;

        if (!title || !author) {
            return this.sendBadRequestResponse(res, {
                error: "title and author are required"
            });
        }

        const book = booksService.create({ title, author, year });

        return this.sendCreatedResponse(res, book);
    }

    async getAllBooks(req, res) {
        const { author, page, limit } = req.query;

        const books = booksService.getAll({
            author,
            page: page ? parseInt(page) : undefined,
            limit: limit ? parseInt(limit) : undefined
        });

        return res.status(200).json(books);
    }

    async getBookById(req, res) {
        const id = parseInt(req.params.id);

        const book = booksService.getById(id);

        if (!book) {
            return this.sendNotFoundResponse(res, {
                error: "Book not found"
            });
        }

        return res.status(200).json(book);
    }

    async updateBook(req, res) {
        const id = parseInt(req.params.id);

        const updated = booksService.update(id, req.body);

        if (!updated) {
            return this.sendNotFoundResponse(res, {
                error: "Book not found"
            });
        }

        return res.status(200).json(updated);
    }

    async deleteBook(req, res) {
        const id = parseInt(req.params.id);

        const deleted = booksService.remove(id);

        if (!deleted) {
            return this.sendNotFoundResponse(res, {
                error: "Book not found"
            });
        }

        return res.status(204).send();
    }
};