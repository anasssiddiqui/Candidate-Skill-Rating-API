"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const jwt_auth_guard_1 = require("./jwt-auth.guard");
const swagger_1 = require("@nestjs/swagger");
const login_dto_1 = require("./dto/login.dto");
const profile_dto_1 = require("./dto/profile.dto");
const create_user_dto_1 = require("../user/dto/create-user.dto");
const api_response_1 = require("../utility/api-response");
const swagger_definitions_1 = require("../swagger-definitions");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async login(req) {
        const result = await this.authService.login(req.body);
        return new api_response_1.SuccessResponse(swagger_definitions_1.LOGIN_DESCRIPTION_SUCCESS, result);
    }
    getProfile(req) {
        return new api_response_1.SuccessResponse(swagger_definitions_1.LOGIN_DESCRIPTION_SUCCESS, req.user);
    }
    async create(createUserDto) {
        const result = await this.authService.create(createUserDto);
        return new api_response_1.SuccessResponse(swagger_definitions_1.SIGNUP_DESCRIPTION_SUCCESS, result);
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)('login'),
    (0, swagger_1.ApiOperation)({ operationId: 'login', summary: swagger_definitions_1.LOGIN_SUMMARY, description: swagger_definitions_1.LOGIN_DESCRIPTION_SUCCESS, tags: ['auth'] }),
    (0, swagger_1.ApiBody)({ type: login_dto_1.LoginDto }),
    (0, swagger_1.ApiResponse)({ status: 201, description: swagger_definitions_1.LOGIN_DESCRIPTION_SUCCESS }),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('profile'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ operationId: 'profile', summary: swagger_definitions_1.PROFILE_SUMMARY, description: swagger_definitions_1.PROFILE_DESCRIPTION_SUCCESS, tags: ['auth'] }),
    (0, swagger_1.ApiResponse)({ status: 200, description: swagger_definitions_1.PROFILE_DESCRIPTION_SUCCESS, type: profile_dto_1.ProfileDto, }),
    (0, swagger_1.ApiResponse)({ status: 401, description: swagger_definitions_1.PROFILE_DESCRIPTION_UNAUTHORIZED }),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "getProfile", null);
__decorate([
    (0, common_1.Post)('signup'),
    (0, swagger_1.ApiOperation)({ operationId: 'signup', summary: swagger_definitions_1.SIGNUP_SUMMARY, description: swagger_definitions_1.SIGNUP_DESCRIPTION_SUCCESS, tags: ['auth'] }),
    (0, swagger_1.ApiBody)({ type: create_user_dto_1.CreateUserDto }),
    (0, swagger_1.ApiResponse)({ status: 400, description: swagger_definitions_1.SIGNUP_DESCRIPTION_BAD_REQUEST }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "create", null);
exports.AuthController = AuthController = __decorate([
    (0, swagger_1.ApiTags)('auth'),
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map