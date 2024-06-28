import { Response } from '../response/response.entity';
export declare enum UserRole {
    CANDIDATE = "candidate",
    REVIEWER = "reviewer"
}
export declare class User {
    id: number;
    name: string;
    password: string;
    role: UserRole;
    responses: Response[];
    hashPassword(): Promise<void>;
    comparePassword(password: string): Promise<boolean>;
}
