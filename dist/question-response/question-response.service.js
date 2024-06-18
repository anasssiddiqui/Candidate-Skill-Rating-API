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
exports.QuestionResponseService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const question_response_entity_1 = require("./question-response.entity");
let QuestionResponseService = class QuestionResponseService {
    constructor(questionResponseRepository) {
        this.questionResponseRepository = questionResponseRepository;
    }
    create(createQuestionResponseDto) {
        const questionResponse = this.questionResponseRepository.create(createQuestionResponseDto);
        return this.questionResponseRepository.save(questionResponse);
    }
    findAll() {
        return this.questionResponseRepository.find();
    }
    findOne(id) {
        return this.questionResponseRepository.findOneBy({ id });
    }
    async update(id, updateQuestionResponseDto) {
        await this.questionResponseRepository.update(id, updateQuestionResponseDto);
        return this.findOne(id);
    }
    async remove(id) {
        await this.questionResponseRepository.delete(id);
    }
    async getAggregatedSkills(candidateId) {
        const responses = await this.questionResponseRepository.find({
            where: { candidate: { id: candidateId } },
        });
        const skillRatings = {};
        responses.forEach((response) => {
            if (!skillRatings[response.skillId]) {
                skillRatings[response.skillId] = { totalRating: 0, totalWeight: 0 };
            }
            const weight = this.getWeight(response.difficultyLevel);
            skillRatings[response.skillId].totalRating += response.rating * weight;
            skillRatings[response.skillId].totalWeight += weight;
        });
        const aggregatedSkills = Object.keys(skillRatings).map((skillId) => ({
            skillId: parseInt(skillId, 10),
            rating: skillRatings[skillId].totalRating / skillRatings[skillId].totalWeight,
        }));
        return aggregatedSkills;
    }
    getWeight(difficultyLevel) {
        switch (difficultyLevel) {
            case 'easy':
                return 1;
            case 'medium':
                return 2;
            case 'hard':
                return 3;
            default:
                return 1;
        }
    }
};
exports.QuestionResponseService = QuestionResponseService;
exports.QuestionResponseService = QuestionResponseService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(question_response_entity_1.QuestionResponse)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], QuestionResponseService);
//# sourceMappingURL=question-response.service.js.map