/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';
import { QuestionResponseService } from './question-response.service';
import { CreateQuestionResponseDto } from './dto/create-question-response.dto';
import { UpdateQuestionResponseDto } from './dto/update-question-response.dto';
import {
  CREATE_QUESTION_RESPONSE_SUMMARY,
  CREATE_QUESTION_RESPONSE_DESCRIPTION_SUCCESS,
  CREATE_QUESTION_RESPONSE_DESCRIPTION_BAD_REQUEST,
  GET_QUESTION_RESPONSES_SUMMARY,
  GET_QUESTION_RESPONSES_DESCRIPTION,
  GET_QUESTION_RESPONSE_SUMMARY,
  GET_QUESTION_RESPONSE_DESCRIPTION_SUCCESS,
  GET_QUESTION_RESPONSE_DESCRIPTION_NOT_FOUND,
  UPDATE_QUESTION_RESPONSE_SUMMARY,
  UPDATE_QUESTION_RESPONSE_DESCRIPTION_SUCCESS,
  UPDATE_QUESTION_RESPONSE_DESCRIPTION_NOT_FOUND,
  DELETE_QUESTION_RESPONSE_SUMMARY,
  DELETE_QUESTION_RESPONSE_DESCRIPTION_SUCCESS,
  DELETE_QUESTION_RESPONSE_DESCRIPTION_NOT_FOUND,
} from '../swagger-definitions';

@ApiTags('question-responses')
@Controller('question-responses')
export class QuestionResponseController {
  constructor(
    private readonly questionResponseService: QuestionResponseService,
  ) { }

  /**
   * Endpoint to create a new question response.
   * @param createQuestionResponseDto The data to create a question response.
   * @returns The newly created question response.
   */
  @Post()
  @ApiOperation({ summary: CREATE_QUESTION_RESPONSE_SUMMARY })
  @ApiBody({ type: CreateQuestionResponseDto })
  @ApiResponse({ status: 201, description: CREATE_QUESTION_RESPONSE_DESCRIPTION_SUCCESS })
  @ApiResponse({ status: 400, description: CREATE_QUESTION_RESPONSE_DESCRIPTION_BAD_REQUEST })
  async create(@Body() createQuestionResponseDto: CreateQuestionResponseDto) {
    return this.questionResponseService.create(createQuestionResponseDto);
  }

  /**
   * Endpoint to retrieve all question responses.
   * @returns A list of all question responses.
   */
  @Get()
  @ApiOperation({ summary: GET_QUESTION_RESPONSES_SUMMARY })
  @ApiResponse({ status: 200, description: GET_QUESTION_RESPONSES_DESCRIPTION, type: [CreateQuestionResponseDto] })
  async findAll() { return this.questionResponseService.findAll() }

  /**
   * Endpoint to retrieve a question response by ID.
   * @param id The ID of the question response to retrieve.
   * @returns The found question response.
   */
  @Get(':id')
  @ApiOperation({ summary: GET_QUESTION_RESPONSE_SUMMARY })
  @ApiParam({ name: 'id', type: 'string' })
  @ApiResponse({ status: 200, description: GET_QUESTION_RESPONSE_DESCRIPTION_SUCCESS, type: CreateQuestionResponseDto })
  @ApiResponse({ status: 404, description: GET_QUESTION_RESPONSE_DESCRIPTION_NOT_FOUND })
  async findOne(@Param('id') id: string) { return this.questionResponseService.findOne(+id) }

  /**
   * Endpoint to update a question response by ID.
   * @param id The ID of the question response to update.
   * @param updateQuestionResponseDto The data to update the question response.
   * @returns The updated question response.
   */
  @Patch(':id')
  @ApiOperation({ summary: UPDATE_QUESTION_RESPONSE_SUMMARY })
  @ApiParam({ name: 'id', type: 'string' })
  @ApiBody({ type: UpdateQuestionResponseDto })
  @ApiResponse({ status: 200, description: UPDATE_QUESTION_RESPONSE_DESCRIPTION_SUCCESS, type: CreateQuestionResponseDto })
  @ApiResponse({ status: 404, description: UPDATE_QUESTION_RESPONSE_DESCRIPTION_NOT_FOUND })
  async update(@Param('id') id: string, @Body() updateQuestionResponseDto: UpdateQuestionResponseDto,
  ) { return this.questionResponseService.update(+id, updateQuestionResponseDto) }

  /**
   * Endpoint to delete a question response by ID.
   * @param id The ID of the question response to delete.
   * @returns Success message upon deletion.
   */
  @Delete(':id')
  @ApiOperation({ summary: DELETE_QUESTION_RESPONSE_SUMMARY })
  @ApiParam({ name: 'id', type: 'string' })
  @ApiResponse({ status: 200, description: DELETE_QUESTION_RESPONSE_DESCRIPTION_SUCCESS })
  @ApiResponse({ status: 404, description: DELETE_QUESTION_RESPONSE_DESCRIPTION_NOT_FOUND })
  async remove(@Param('id') id: string) { return this.questionResponseService.remove(+id) }
}
