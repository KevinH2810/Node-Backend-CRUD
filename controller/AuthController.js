const BaseController = require("./BaseController");

module.exports = class AuthController extends BaseController {
	constructor() {
		super();
	}

	async getToken(req, res) {
        const { username, password } = req.body;

        if (username === "admin" && password === "password") {
            return res.status(200).json({
                token: "supersecrettoken"
            });
        }

        return res.status(401).json({
            error: "Unauthorized"
        });
    }
};
