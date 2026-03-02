const BaseController = require("./BaseController");

module.exports = class MiscController extends BaseController {
    constructor() {
		super();
	}

    async ping(req, res) {
        return this.sendSuccessResponse(res, {
        success: true
    });
}

    echo(req, res) {

        return this.sendSuccessResponse(res, {
							status: 200,
							message: req.body,
						});
    }
}