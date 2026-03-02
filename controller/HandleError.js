const BaseController = require('./BaseController');
const { ResponseBuilder } = require('../util');

module.exports = class HandleError extends BaseController {
    constructor() {
        super();
    }

    sendError(res, error, statusCode = 500) {
        const responseBuilder = new ResponseBuilder();

        this.sendInternalServerErrorResponse(
            res,
            responseBuilder
                .setStatus(statusCode)
                .setSuccess(false)
                .setMessage(
                    error.toString().replace(/\"/gi, '')
                )
                .build(),
            statusCode
        );
    }
};