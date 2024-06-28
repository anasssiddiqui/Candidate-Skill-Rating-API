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
exports.QuestionResponseController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const question_response_service_1 = require("./question-response.service");
const create_question_response_dto_1 = require("./dto/create-question-response.dto");
const update_question_response_dto_1 = require("./dto/update-question-response.dto");
const swagger_definitions_1 = require("../swagger-definitions");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let QuestionResponseController = class QuestionResponseController {
    constructor(questionResponseService) {
        this.questionResponseService = questionResponseService;
    }
    async create(createQuestionResponseDto) {
        return this.questionResponseService.create(createQuestionResponseDto);
    }
    async findAll() { return this.questionResponseService.findAll(); }
    async findOne(id) { return this.questionResponseService.findOne(+id); }
    async update(id, updateQuestionResponseDto) { return this.questionResponseService.update(+id, updateQuestionResponseDto); }
    async remove(id) { return this.questionResponseService.remove(+id); }
};
exports.QuestionResponseController = QuestionResponseController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: swagger_definitions_1.CREATE_QUESTION_RESPONSE_SUMMARY }),
    (0, swagger_1.ApiBody)({ type: create_question_response_dto_1.CreateQuestionResponseDto }),
    (0, swagger_1.ApiResponse)({ status: 201, description: swagger_definitions_1.CREATE_QUESTION_RESPONSE_DESCRIPTION_SUCCESS }),
    (0, swagger_1.ApiResponse)({ status: 400, description: swagger_definitions_1.CREATE_QUESTION_RESPONSE_DESCRIPTION_BAD_REQUEST }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_question_response_dto_1.CreateQuestionResponseDto]),
    __metadata("design:returntype", Promise)
], QuestionResponseController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: swagger_definitions_1.GET_QUESTION_RESPONSES_SUMMARY }),
    (0, swagger_1.ApiResponse)({ status: 200, description: swagger_definitions_1.GET_QUESTION_RESPONSES_DESCRIPTION, type: [create_question_response_dto_1.CreateQuestionResponseDto] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], QuestionResponseController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: swagger_definitions_1.GET_QUESTION_RESPONSE_SUMMARY }),
    (0, swagger_1.ApiParam)({ name: 'id', type: 'string' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: swagger_definitions_1.GET_QUESTION_RESPONSE_DESCRIPTION_SUCCESS, type: create_question_response_dto_1.CreateQuestionResponseDto }),
    (0, swagger_1.ApiResponse)({ status: 404, description: swagger_definitions_1.GET_QUESTION_RESPONSE_DESCRIPTION_NOT_FOUND }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], QuestionResponseController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: swagger_definitions_1.UPDATE_QUESTION_RESPONSE_SUMMARY }),
    (0, swagger_1.ApiParam)({ name: 'id', type: 'string' }),
    (0, swagger_1.ApiBody)({ type: update_question_response_dto_1.UpdateQuestionResponseDto }),
    (0, swagger_1.ApiResponse)({ status: 200, description: swagger_definitions_1.UPDATE_QUESTION_RESPONSE_DESCRIPTION_SUCCESS, type: create_question_response_dto_1.CreateQuestionResponseDto }),
    (0, swagger_1.ApiResponse)({ status: 404, description: swagger_definitions_1.UPDATE_QUESTION_RESPONSE_DESCRIPTION_NOT_FOUND }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_question_response_dto_1.UpdateQuestionResponseDto]),
    __metadata("design:returntype", Promise)
], QuestionResponseController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: swagger_definitions_1.DELETE_QUESTION_RESPONSE_SUMMARY }),
    (0, swagger_1.ApiParam)({ name: 'id', type: 'string' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: swagger_definitions_1.DELETE_QUESTION_RESPONSE_DESCRIPTION_SUCCESS }),
    (0, swagger_1.ApiResponse)({ status: 404, description: swagger_definitions_1.DELETE_QUESTION_RESPONSE_DESCRIPTION_NOT_FOUND }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], QuestionResponseController.prototype, "remove", null);
exports.QuestionResponseController = QuestionResponseController = __decorate([
    (0, swagger_1.ApiTags)('question-responses'),
    (0, common_1.Controller)('question-responses'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [question_response_service_1.QuestionResponseService])
], QuestionResponseController);
//# sourceMappingURL=question-response.controller.js.map