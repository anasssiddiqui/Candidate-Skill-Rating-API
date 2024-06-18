import { DifficultyLevel } from '../question-response.entity';
export declare class CreateQuestionResponseDto {
    skillId: number;
    difficultyLevel: DifficultyLevel;
    question: string;
    response?: string;
    rating?: number;
}
