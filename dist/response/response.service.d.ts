import { Repository } from 'typeorm';
import { Response } from './response.entity';
import { CreateResponseDto } from './dto/create-response.dto';
import { UpdateResponseDto } from './dto/update-response.dto';
export declare class ResponseService {
    private responseRepository;
    constructor(responseRepository: Repository<Response>);
    create(createResponseDto: CreateResponseDto): Promise<Response>;
    findAll(): Promise<Response[]>;
    findOne(id: number): Promise<Response>;
    update(id: number, updateResponseDto: UpdateResponseDto): Promise<Response>;
    remove(id: number): Promise<void>;
}
