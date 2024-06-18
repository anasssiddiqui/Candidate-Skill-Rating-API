import { QuestionResponseService } from './question-response.service';
import { CreateQuestionResponseDto } from './dto/create-question-response.dto';
import { UpdateQuestionResponseDto } from './dto/update-question-response.dto';
export declare class QuestionResponseController {
    private readonly questionResponseService;
    constructor(questionResponseService: QuestionResponseService);
    create(createQuestionResponseDto: CreateQuestionResponseDto): Promise<import("./question-response.entity").QuestionResponse>;
    findAll(): Promise<import("./question-response.entity").QuestionResponse[]>;
    findOne(id: string): Promise<import("./question-response.entity").QuestionResponse>;
    update(id: string, updateQuestionResponseDto: UpdateQuestionResponseDto): Promise<import("./question-response.entity").QuestionResponse>;
    remove(id: string): Promise<void>;
}
