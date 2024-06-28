import { AuthService } from './auth.service';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { SuccessResponse } from '../utility/api-response';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(req: any): Promise<SuccessResponse>;
    getProfile(req: any): SuccessResponse;
    create(createUserDto: CreateUserDto): Promise<SuccessResponse>;
}
