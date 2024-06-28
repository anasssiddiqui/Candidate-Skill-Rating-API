import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UserService, jwtService: JwtService);
    validateUser(username: string, pass: string): Promise<any>;
    login(loginDto: LoginDto): Promise<{
        access_token: string;
    }>;
    create(createUserDto: CreateUserDto): Promise<import("../user/user.entity").User>;
}
