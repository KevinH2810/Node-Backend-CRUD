const BaseController = require("./BaseController");

module.exports = class AuthController extends BaseController {
	constructor() {
		super();
	}

	getToken(req, res) {
        res.status(200).json({
            token: "supersecrettoken"
        });
    };
};
