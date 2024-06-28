// src/question/question.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Question } from './question.entity';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';

@Injectable()
export class QuestionService {
    constructor(
        @InjectRepository(Question)
        private questionRepository: Repository<Question>,
    ) { }

    async create(createQuestionDto: CreateQuestionDto): Promise<Question> {
        const question = this.questionRepository.create(createQuestionDto);
        return this.questionRepository.save(question);
    }

    async findAll(): Promise<Question[]> {
        return this.questionRepository.find();
    }

    async findOne(id: number): Promise<Question> {
        return this.questionRepository.findOne({ where: { id } });
    }

    async update(id: number, updateQuestionDto: UpdateQuestionDto): Promise<Question> {
        await this.questionRepository.update(id, updateQuestionDto);
        return this.questionRepository.findOne({ where: { id } });
    }

    async remove(id: number): Promise<void> {
        await this.questionRepository.delete(id);
    }
}
