const express = require("express");
const router = express.Router();
const { authController } = require("../controller");

router.post("/token", (req, res) => {
    authController.getToken(req, res);
});

module.exports = router;