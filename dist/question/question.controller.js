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
exports.QuestionController = void 0;
const common_1 = require("@nestjs/common");
const question_service_1 = require("./question.service");
const create_question_dto_1 = require("./dto/create-question.dto");
const update_question_dto_1 = require("./dto/update-question.dto");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const swagger_1 = require("@nestjs/swagger");
const api_response_1 = require("../utility/api-response");
let QuestionController = class QuestionController {
    constructor(questionService) {
        this.questionService = questionService;
    }
    create(createQuestionDto) {
        const result = this.questionService.create(createQuestionDto);
        return new api_response_1.SuccessResponse('Create a new question sucessfully', result);
    }
    findAll() {
        const result = this.questionService.findAll();
        return new api_response_1.SuccessResponse('Retrieve all questions sucessfully', result);
    }
    findOne(id) {
        const result = this.questionService.findOne(+id);
        return new api_response_1.SuccessResponse('Retrieve a single question sucessfully', result);
    }
    update(id, updateQuestionDto) {
        const result = this.questionService.update(+id, updateQuestionDto);
        return new api_response_1.SuccessResponse('Retrieve a single question sucessfully', result);
    }
    remove(id) {
        const result = this.questionService.remove(+id);
        return new api_response_1.SuccessResponse('Delete a question sucessfully', result);
    }
};
exports.QuestionController = QuestionController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new question' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'The question has been successfully created.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_question_dto_1.CreateQuestionDto]),
    __metadata("design:returntype", void 0)
], QuestionController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Retrieve all questions' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Returns a list of all questions.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], QuestionController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Retrieve a single question by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number, description: 'ID of the question to retrieve' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Returns the question with the specified ID.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], QuestionController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a question by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number, description: 'ID of the question to update' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Returns the updated question.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_question_dto_1.UpdateQuestionDto]),
    __metadata("design:returntype", void 0)
], QuestionController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a question by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number, description: 'ID of the question to delete' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The question has been successfully deleted.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], QuestionController.prototype, "remove", null);
exports.QuestionController = QuestionController = __decorate([
    (0, swagger_1.ApiTags)('questions'),
    (0, common_1.Controller)('questions'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [question_service_1.QuestionService])
], QuestionController);
//# sourceMappingURL=question.controller.js.map