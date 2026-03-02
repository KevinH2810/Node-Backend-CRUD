const express = require("express");
const router = express.Router();
const { bookController } = require("../controller");
// const authMiddleware = require("../middleware/auth.middleware");

const authMiddleware = require("../util/middleware")

// Create
router.post("/", (req, res) => {
    bookController.createBook(req, res);
});

// Protected: GET /books
router.get("/", 
    // authMiddleware, 
    (req, res) => {
    bookController.getAllBooks(req, res);
});

// Get by ID
router.get("/:id", (req, res) => {
    bookController.getBookById(req, res);
});

// Update
router.put("/:id", (req, res) => {
    bookController.updateBook(req, res);
});

// Delete
router.delete("/:id", (req, res) => {
    bookController.deleteBook(req, res);
});

module.exports = router;