"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalServerErrorResponse = exports.NotFoundResponse = exports.ForbiddenResponse = exports.UnauthorizedResponse = exports.BadRequestResponse = exports.SuccessResponse = exports.ApiResponse = void 0;
const common_1 = require("@nestjs/common");
class ApiResponse {
    constructor(statusCode, status, message, data) {
        this.statusCode = statusCode;
        this.status = status;
        this.message = message;
        this.data = data;
    }
    send(res) {
        return res.status(this.statusCode).json({
            status: this.status,
            message: this.message,
            data: this.data,
        });
    }
}
exports.ApiResponse = ApiResponse;
class SuccessResponse extends ApiResponse {
    constructor(message = 'Success', data) {
        super(common_1.HttpStatus.OK, 'success', message, data);
    }
}
exports.SuccessResponse = SuccessResponse;
class BadRequestResponse extends ApiResponse {
    constructor(message = 'Bad Request', data) {
        super(common_1.HttpStatus.BAD_REQUEST, 'error', message, data);
    }
}
exports.BadRequestResponse = BadRequestResponse;
class UnauthorizedResponse extends ApiResponse {
    constructor(message = 'Unauthorized', data) {
        super(common_1.HttpStatus.UNAUTHORIZED, 'error', message, data);
    }
}
exports.UnauthorizedResponse = UnauthorizedResponse;
class ForbiddenResponse extends ApiResponse {
    constructor(message = 'Forbidden', data) {
        super(common_1.HttpStatus.FORBIDDEN, 'error', message, data);
    }
}
exports.ForbiddenResponse = ForbiddenResponse;
class NotFoundResponse extends ApiResponse {
    constructor(message = 'Not Found', data) {
        super(common_1.HttpStatus.NOT_FOUND, 'error', message, data);
    }
}
exports.NotFoundResponse = NotFoundResponse;
class InternalServerErrorResponse extends ApiResponse {
    constructor(message = 'Internal Server Error', data) {
        super(common_1.HttpStatus.INTERNAL_SERVER_ERROR, 'error', message, data);
    }
}
exports.InternalServerErrorResponse = InternalServerErrorResponse;
//# sourceMappingURL=api-response.js.map