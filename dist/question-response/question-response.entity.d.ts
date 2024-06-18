import { User } from '../user/user.entity';
export declare enum DifficultyLevel {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard"
}
export declare class QuestionResponse {
    id: number;
    skillId: number;
    difficultyLevel: DifficultyLevel;
    question: string;
    response: string;
    rating: number;
    candidate: User;
}
