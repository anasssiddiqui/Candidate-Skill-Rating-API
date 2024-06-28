import { QuestionService } from './question.service';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { SuccessResponse } from '../utility/api-response';
export declare class QuestionController {
    private readonly questionService;
    constructor(questionService: QuestionService);
    create(createQuestionDto: CreateQuestionDto): SuccessResponse;
    findAll(): SuccessResponse;
    findOne(id: string): SuccessResponse;
    update(id: string, updateQuestionDto: UpdateQuestionDto): SuccessResponse;
    remove(id: string): SuccessResponse;
}
