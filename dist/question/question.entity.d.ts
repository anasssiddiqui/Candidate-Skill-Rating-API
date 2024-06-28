import { Response } from '../response/response.entity';
export declare enum DifficultyLevel {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard"
}
export declare class Question {
    id: number;
    question: string;
    difficultyLevel: DifficultyLevel;
    responses: Response[];
}
