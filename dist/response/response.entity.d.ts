import { User } from '../user/user.entity';
import { Question } from '../question/question.entity';
export declare class Response {
    id: number;
    rating: number;
    user: User;
    question: Question;
    difficulty_level: string;
    response: string;
}
