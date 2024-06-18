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
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionResponse = exports.DifficultyLevel = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../user/user.entity");
var DifficultyLevel;
(function (DifficultyLevel) {
    DifficultyLevel["EASY"] = "easy";
    DifficultyLevel["MEDIUM"] = "medium";
    DifficultyLevel["HARD"] = "hard";
})(DifficultyLevel || (exports.DifficultyLevel = DifficultyLevel = {}));
let QuestionResponse = class QuestionResponse {
};
exports.QuestionResponse = QuestionResponse;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], QuestionResponse.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], QuestionResponse.prototype, "skillId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: DifficultyLevel,
    }),
    __metadata("design:type", String)
], QuestionResponse.prototype, "difficultyLevel", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], QuestionResponse.prototype, "question", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], QuestionResponse.prototype, "response", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], QuestionResponse.prototype, "rating", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User),
    __metadata("design:type", user_entity_1.User)
], QuestionResponse.prototype, "candidate", void 0);
exports.QuestionResponse = QuestionResponse = __decorate([
    (0, typeorm_1.Entity)()
], QuestionResponse);
//# sourceMappingURL=question-response.entity.js.map