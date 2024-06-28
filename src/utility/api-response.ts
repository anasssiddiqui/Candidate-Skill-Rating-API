import { HttpStatus } from '@nestjs/common';

export class ApiResponse {
    constructor(
        public statusCode: number,
        public status: string,
        public message: string,
        public data?: any,
    ) { }

    send(res: any) {
        return res.status(this.statusCode).json({
            status: this.status,
            message: this.message,
            data: this.data,
        });
    }
}

export class SuccessResponse extends ApiResponse {
    constructor(message = 'Success', data?: any) {
        super(HttpStatus.OK, 'success', message, data);
    }
}

export class BadRequestResponse extends ApiResponse {
    constructor(message = 'Bad Request', data?: any) {
        super(HttpStatus.BAD_REQUEST, 'error', message, data);
    }
}

export class UnauthorizedResponse extends ApiResponse {
    constructor(message = 'Unauthorized', data?: any) {
        super(HttpStatus.UNAUTHORIZED, 'error', message, data);
    }
}

export class ForbiddenResponse extends ApiResponse {
    constructor(message = 'Forbidden', data?: any) {
        super(HttpStatus.FORBIDDEN, 'error', message, data);
    }
}

export class NotFoundResponse extends ApiResponse {
    constructor(message = 'Not Found', data?: any) {
        super(HttpStatus.NOT_FOUND, 'error', message, data);
    }
}

export class InternalServerErrorResponse extends ApiResponse {
    constructor(message = 'Internal Server Error', data?: any) {
        super(HttpStatus.INTERNAL_SERVER_ERROR, 'error', message, data);
    }
}
