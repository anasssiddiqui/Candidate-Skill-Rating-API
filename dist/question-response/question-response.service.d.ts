import { Repository } from 'typeorm';
import { QuestionResponse } from './question-response.entity';
import { CreateQuestionResponseDto } from './dto/create-question-response.dto';
import { UpdateQuestionResponseDto } from './dto/update-question-response.dto';
export declare class QuestionResponseService {
    private questionResponseRepository;
    constructor(questionResponseRepository: Repository<QuestionResponse>);
    create(createQuestionResponseDto: CreateQuestionResponseDto): Promise<QuestionResponse>;
    findAll(): Promise<QuestionResponse[]>;
    findOne(id: number): Promise<QuestionResponse>;
    update(id: number, updateQuestionResponseDto: UpdateQuestionResponseDto): Promise<QuestionResponse>;
    remove(id: number): Promise<void>;
    getAggregatedSkills(candidateId: number): Promise<{
        skillId: number;
        rating: number;
    }[]>;
    private getWeight;
}
