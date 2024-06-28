import { ResponseService } from './response.service';
import { CreateResponseDto } from './dto/create-response.dto';
import { UpdateResponseDto } from './dto/update-response.dto';
import { SuccessResponse } from '../utility/api-response';
export declare class ResponseController {
    private readonly responseService;
    constructor(responseService: ResponseService);
    create(createResponseDto: CreateResponseDto): SuccessResponse;
    findAll(): SuccessResponse;
    findOne(id: string): SuccessResponse;
    update(id: string, updateResponseDto: UpdateResponseDto): SuccessResponse;
    remove(id: string): SuccessResponse;
}
