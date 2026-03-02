const BaseController = require("./BaseController");

module.exports = class MiscController extends BaseController {
    constructor() {
		super();
	}

    ping(req, res)  {

        return this.sendSuccessResponse(res, {
							status: 200,
							message: "User pong",
						});
    }

    echo(req, res) {

        return this.sendSuccessResponse(res, {
							status: 200,
							message: req.body,
						});
    }
}