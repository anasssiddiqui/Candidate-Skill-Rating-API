// src/response/response.controller.ts

import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { ResponseService } from './response.service';
import { CreateResponseDto } from './dto/create-response.dto';
import { UpdateResponseDto } from './dto/update-response.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { SuccessResponse, BadRequestResponse } from '../utility/api-response';

@ApiTags('responses')
@Controller('responses')
@UseGuards(JwtAuthGuard) // Secure all endpoints in this controller
@ApiBearerAuth()
export class ResponseController {
    constructor(private readonly responseService: ResponseService) { }

    /**
     * @description Create a new response
     * @param createResponseDto - The data transfer object containing the response details
     * @returns The created response
     */
    @UseGuards(JwtAuthGuard)
    @Post()
    create(@Body() createResponseDto: CreateResponseDto) {
        const result = this.responseService.create(createResponseDto);
        return new SuccessResponse('Create a new response sucessfully', result);
    }

    /**
     * @description Retrieve all responses
     * @returns A list of all responses
     */
    @UseGuards(JwtAuthGuard)
    @Get()
    findAll() {
        const result = this.responseService.findAll();
        return new SuccessResponse('Retrieve all responses sucessfully', result);
    }

    /**
     * @description Retrieve a single response by ID
     * @param id - The ID of the response to retrieve
     * @returns The response with the specified ID
     */
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findOne(@Param('id') id: string) {
        const result = this.responseService.findOne(+id);
        return new SuccessResponse('Retrieve a single response sucessfully', result);
    }

    /**
     * @description Update a response by ID
     * @param id - The ID of the response to update
     * @param updateResponseDto - The data transfer object containing the updated response details
     * @returns The updated response
     */
    @UseGuards(JwtAuthGuard)
    @Put(':id')
    update(@Param('id') id: string, @Body() updateResponseDto: UpdateResponseDto) {
        const result = this.responseService.update(+id, updateResponseDto);
        return new SuccessResponse('Update a response sucessfully', result);
    }

    /**
     * @description Delete a response by ID
     * @param id - The ID of the response to delete
     * @returns A confirmation message
     */
    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    remove(@Param('id') id: string) {
        const result = this.responseService.remove(+id);
        return new SuccessResponse('Delete a response sucessfully', result);
    }
}
