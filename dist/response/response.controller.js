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
exports.ResponseController = void 0;
const common_1 = require("@nestjs/common");
const response_service_1 = require("./response.service");
const create_response_dto_1 = require("./dto/create-response.dto");
const update_response_dto_1 = require("./dto/update-response.dto");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const swagger_1 = require("@nestjs/swagger");
const api_response_1 = require("../utility/api-response");
let ResponseController = class ResponseController {
    constructor(responseService) {
        this.responseService = responseService;
    }
    create(createResponseDto) {
        const result = this.responseService.create(createResponseDto);
        return new api_response_1.SuccessResponse('Create a new response sucessfully', result);
    }
    findAll() {
        const result = this.responseService.findAll();
        return new api_response_1.SuccessResponse('Retrieve all responses sucessfully', result);
    }
    findOne(id) {
        const result = this.responseService.findOne(+id);
        return new api_response_1.SuccessResponse('Retrieve a single response sucessfully', result);
    }
    update(id, updateResponseDto) {
        const result = this.responseService.update(+id, updateResponseDto);
        return new api_response_1.SuccessResponse('Update a response sucessfully', result);
    }
    remove(id) {
        const result = this.responseService.remove(+id);
        return new api_response_1.SuccessResponse('Delete a response sucessfully', result);
    }
};
exports.ResponseController = ResponseController;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_response_dto_1.CreateResponseDto]),
    __metadata("design:returntype", void 0)
], ResponseController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ResponseController.prototype, "findAll", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ResponseController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_response_dto_1.UpdateResponseDto]),
    __metadata("design:returntype", void 0)
], ResponseController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ResponseController.prototype, "remove", null);
exports.ResponseController = ResponseController = __decorate([
    (0, swagger_1.ApiTags)('responses'),
    (0, common_1.Controller)('responses'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [response_service_1.ResponseService])
], ResponseController);
//# sourceMappingURL=response.controller.js.map