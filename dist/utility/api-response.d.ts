export declare class ApiResponse {
    statusCode: number;
    status: string;
    message: string;
    data?: any;
    constructor(statusCode: number, status: string, message: string, data?: any);
    send(res: any): any;
}
export declare class SuccessResponse extends ApiResponse {
    constructor(message?: string, data?: any);
}
export declare class BadRequestResponse extends ApiResponse {
    constructor(message?: string, data?: any);
}
export declare class UnauthorizedResponse extends ApiResponse {
    constructor(message?: string, data?: any);
}
export declare class ForbiddenResponse extends ApiResponse {
    constructor(message?: string, data?: any);
}
export declare class NotFoundResponse extends ApiResponse {
    constructor(message?: string, data?: any);
}
export declare class InternalServerErrorResponse extends ApiResponse {
    constructor(message?: string, data?: any);
}
