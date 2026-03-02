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

    async echo(req, res) {
        return res.status(200).json(req.body);
    }
}