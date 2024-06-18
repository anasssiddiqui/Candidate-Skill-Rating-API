/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import {
  CREATE_USER_SUMMARY,
  CREATE_USER_DESCRIPTION_SUCCESS,
  CREATE_USER_DESCRIPTION_FORBIDDEN,
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
@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) { }

  /**
   * Endpoint to create a new user.
   * @param createUserDto The data to create a user.
   * @returns The newly created user.
   */
  @Post()
  @ApiOperation({ summary: CREATE_USER_SUMMARY })
  @ApiResponse({ status: 201, description: CREATE_USER_DESCRIPTION_SUCCESS })
  @ApiResponse({ status: 403, description: CREATE_USER_DESCRIPTION_FORBIDDEN })
  create(@Body() createUserDto: CreateUserDto) { return this.userService.create(createUserDto); }

  /**
   * Endpoint to retrieve all users.
   * @returns A list of all users.
   */
  @Get()
  @ApiOperation({ summary: GET_USERS_SUMMARY })
  @ApiResponse({ status: 200, description: GET_USERS_DESCRIPTION })
  findAll() { return this.userService.findAll(); }

  /**
   * Endpoint to retrieve a user by ID.
   * @param id The ID of the user to retrieve.
   * @returns The found user.
   */
  @Get(':id')
  @ApiOperation({ summary: GET_USER_SUMMARY })
  @ApiParam({ name: 'id', type: 'string' })
  @ApiResponse({ status: 200, description: GET_USER_DESCRIPTION_SUCCESS })
  @ApiResponse({ status: 404, description: GET_USER_DESCRIPTION_NOT_FOUND })
  findOne(@Param('id') id: string) { return this.userService.findOne(+id) }

  /**
   * Endpoint to update a user by ID.
   * @param id The ID of the user to update.
   * @param updateUserDto The data to update the user.
   * @returns The updated user.
   */
  @Put(':id')
  @ApiOperation({ summary: UPDATE_USER_SUMMARY })
  @ApiParam({ name: 'id', type: 'string' })
  @ApiResponse({ status: 200, description: UPDATE_USER_DESCRIPTION_SUCCESS })
  @ApiResponse({ status: 404, description: UPDATE_USER_DESCRIPTION_NOT_FOUND })
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) { return this.userService.update(+id, updateUserDto) }

  /**
   * Endpoint to delete a user by ID.
   * @param id The ID of the user to delete.
   * @returns Success message upon deletion.
   */
  @Delete(':id')
  @ApiOperation({ summary: DELETE_USER_SUMMARY })
  @ApiParam({ name: 'id', type: 'string' })
  @ApiResponse({ status: 200, description: DELETE_USER_DESCRIPTION_SUCCESS })
  @ApiResponse({ status: 404, description: DELETE_USER_DESCRIPTION_NOT_FOUND })
  remove(@Param('id') id: string) { return this.userService.remove(+id) }
}
