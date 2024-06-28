/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Body,
  Param,
  Delete,
  Put,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBearerAuth } from '@nestjs/swagger';
import { SuccessResponse, BadRequestResponse } from '../utility/api-response';

import {
  GET_USERS_SUMMARY,
  GET_USERS_DESCRIPTION,
  GET_USER_SUMMARY,
  GET_USER_DESCRIPTION_SUCCESS,
  GET_USER_DESCRIPTION_NOT_FOUND,
  UPDATE_USER_SUMMARY,
  UPDATE_USER_DESCRIPTION_SUCCESS,
  UPDATE_USER_DESCRIPTION_NOT_FOUND,
  DELETE_USER_SUMMARY,
  DELETE_USER_DESCRIPTION_SUCCESS,
  DELETE_USER_DESCRIPTION_NOT_FOUND,
} from '../swagger-definitions';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
@ApiTags('users')
@Controller('users')
@UseGuards(JwtAuthGuard) // Secure all endpoints in this controller
@ApiBearerAuth()
export class UserController {
  constructor(private readonly userService: UserService) { }


  /**
   * Endpoint to retrieve all users.
   * @returns A list of all users.
   */
  @Get()
  @ApiOperation({ summary: GET_USERS_SUMMARY })
  @ApiResponse({ status: 200, description: GET_USERS_DESCRIPTION })
  async findAll() {
    const result = await this.userService.findAll();
    return new SuccessResponse(GET_USERS_DESCRIPTION, result);
  }

  /**
   * Endpoint to retrieve a user by ID.
   * @param id The ID of the user to retrieve.
   * @returns The found user.
   */
  @Get(':id')
  @ApiOperation({ summary: GET_USER_SUMMARY })
  @ApiParam({ name: 'id', type: 'string' })
  @ApiResponse({ status: 404, description: GET_USER_DESCRIPTION_NOT_FOUND })
  async findOne(@Param('id') id: string) {
    const result = await this.userService.findOne(+id)
    return new SuccessResponse(GET_USER_DESCRIPTION_SUCCESS, result);
  }

  /**
   * Endpoint to update a user by ID.
   * @param id The ID of the user to update.
   * @param updateUserDto The data to update the user.
   * @returns The updated user.
   */
  @Put(':id')
  @ApiOperation({ summary: UPDATE_USER_SUMMARY })
  @ApiParam({ name: 'id', type: 'string' })
  @ApiResponse({ status: 404, description: UPDATE_USER_DESCRIPTION_NOT_FOUND })
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    const result = await this.userService.update(+id, updateUserDto)
    return new SuccessResponse(UPDATE_USER_DESCRIPTION_SUCCESS, result);
  }

  /**
   * Endpoint to delete a user by ID.
   * @param id The ID of the user to delete.
   * @returns Success message upon deletion.
   */
  @Delete(':id')
  @ApiOperation({ summary: DELETE_USER_SUMMARY })
  @ApiParam({ name: 'id', type: 'string' })
  @ApiResponse({ status: 404, description: DELETE_USER_DESCRIPTION_NOT_FOUND })
  remove(@Param('id') id: string) {
    return new SuccessResponse(DELETE_USER_DESCRIPTION_SUCCESS);
  }
}