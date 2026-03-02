const express = require("express");
const router = express.Router();
const { miscController } = require('../controller');

router.get('/ping', (req, res) => {
    miscController.ping(req, res)
});

module.exports = router;