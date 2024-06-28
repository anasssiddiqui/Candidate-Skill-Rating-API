// src/question/question.controller.ts

import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { QuestionService } from './question.service';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { SuccessResponse, BadRequestResponse } from '../utility/api-response';

@ApiTags('questions')
@Controller('questions')
@UseGuards(JwtAuthGuard) // Secure all endpoints in this controller
@ApiBearerAuth()
export class QuestionController {
    constructor(private readonly questionService: QuestionService) { }

    /**
     * @description Create a new question
     * @param createQuestionDto - The data transfer object containing the question details
     * @returns The created question
     */
    @Post()
    @ApiOperation({ summary: 'Create a new question' })
    @ApiResponse({ status: 201, description: 'The question has been successfully created.' })
    create(@Body() createQuestionDto: CreateQuestionDto) {
        const result = this.questionService.create(createQuestionDto);
        return new SuccessResponse('Create a new question sucessfully', result);
    }

    /**
     * @description Retrieve all questions
     * @returns A list of all questions
     */
    @Get()
    @ApiOperation({ summary: 'Retrieve all questions' })
    @ApiResponse({ status: 200, description: 'Returns a list of all questions.' })
    findAll() {
        const result = this.questionService.findAll();
        return new SuccessResponse('Retrieve all questions sucessfully', result);

    }

    /**
     * @description Retrieve a single question by ID
     * @param id - The ID of the question to retrieve
     * @returns The question with the specified ID
     */
    @Get(':id')
    @ApiOperation({ summary: 'Retrieve a single question by ID' })
    @ApiParam({ name: 'id', type: Number, description: 'ID of the question to retrieve' })
    @ApiResponse({ status: 200, description: 'Returns the question with the specified ID.' })
    findOne(@Param('id') id: string) {
        const result = this.questionService.findOne(+id);
        return new SuccessResponse('Retrieve a single question sucessfully', result);

    }

    /**
     * @description Update a question by ID
     * @param id - The ID of the question to update
     * @param updateQuestionDto - The data transfer object containing the updated question details
     * @returns The updated question
     */
    @Put(':id')
    @ApiOperation({ summary: 'Update a question by ID' })
    @ApiParam({ name: 'id', type: Number, description: 'ID of the question to update' })
    @ApiResponse({ status: 200, description: 'Returns the updated question.' })
    update(@Param('id') id: string, @Body() updateQuestionDto: UpdateQuestionDto) {
        const result = this.questionService.update(+id, updateQuestionDto);
        return new SuccessResponse('Retrieve a single question sucessfully', result);

    }

    /**
     * @description Delete a question by ID
     * @param id - The ID of the question to delete
     * @returns A confirmation message
     */
    @Delete(':id')
    @ApiOperation({ summary: 'Delete a question by ID' })
    @ApiParam({ name: 'id', type: Number, description: 'ID of the question to delete' })
    @ApiResponse({ status: 200, description: 'The question has been successfully deleted.' })
    remove(@Param('id') id: string) {
        const result = this.questionService.remove(+id);
        return new SuccessResponse('Delete a question sucessfully', result);
    }
}
