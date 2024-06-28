import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { SuccessResponse } from '../utility/api-response';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    findAll(): Promise<SuccessResponse>;
    findOne(id: string): Promise<SuccessResponse>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<SuccessResponse>;
    remove(id: string): SuccessResponse;
}
