const express = require("express");
const router = express.Router();
const { miscController } = require('../controller');

router.post('/echo', (req, res) => {
    miscController.echo(req, res)
});

module.exports = router;