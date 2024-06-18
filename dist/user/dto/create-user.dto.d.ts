import { UserRole } from '../user.entity';
export declare class CreateUserDto {
    name: string;
    password: string;
    role: UserRole;
}
