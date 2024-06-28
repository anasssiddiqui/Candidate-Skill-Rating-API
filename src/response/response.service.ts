// src/response/response.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Response } from './response.entity';
import { CreateResponseDto } from './dto/create-response.dto';
import { UpdateResponseDto } from './dto/update-response.dto';

@Injectable()
export class ResponseService {
    constructor(
        @InjectRepository(Response)
        private responseRepository: Repository<Response>,
    ) { }

    async create(createResponseDto: CreateResponseDto): Promise<Response> {
        const response = this.responseRepository.create(createResponseDto);
        return this.responseRepository.save(response);
    }

    async findAll(): Promise<Response[]> {
        return this.responseRepository.find({ relations: ['user', 'question'] });
    }

    async findOne(id: number): Promise<Response> {
        return this.responseRepository.findOne({ where: { id }, relations: ['user', 'question'] });
    }

    async update(id: number, updateResponseDto: UpdateResponseDto): Promise<Response> {
        await this.responseRepository.update(id, updateResponseDto);
        return this.responseRepository.findOne({ where: { id }, relations: ['user', 'question'] });
    }

    async remove(id: number): Promise<void> {
        await this.responseRepository.delete(id);
    }
}
