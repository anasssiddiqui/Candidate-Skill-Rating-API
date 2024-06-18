export declare enum UserRole {
    CANDIDATE = "candidate",
    REVIEWER = "reviewer"
}
export declare class User {
    id: number;
    name: string;
    password: string;
    role: UserRole;
}
