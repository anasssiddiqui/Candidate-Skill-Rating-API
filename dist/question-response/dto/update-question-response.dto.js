"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateQuestionResponseDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_question_response_dto_1 = require("./create-question-response.dto");
class UpdateQuestionResponseDto extends (0, mapped_types_1.PartialType)(create_question_response_dto_1.CreateQuestionResponseDto) {
}
exports.UpdateQuestionResponseDto = UpdateQuestionResponseDto;
//# sourceMappingURL=update-question-response.dto.js.map