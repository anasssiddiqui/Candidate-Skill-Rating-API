/* eslint-disable prettier/prettier */
import { Controller, Request, Post, UseGuards, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { ApiTags, ApiOperation, ApiResponse, ApiBody, ApiBearerAuth } from '@nestjs/swagger';
import { LoginDto } from './dto/login.dto';
import { ProfileDto } from './dto/profile.dto';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { SuccessResponse, BadRequestResponse } from '../utility/api-response';

import {
  LOGIN_SUMMARY,
  LOGIN_DESCRIPTION_SUCCESS,
  PROFILE_SUMMARY,
  PROFILE_DESCRIPTION_SUCCESS,
  PROFILE_DESCRIPTION_UNAUTHORIZED,
  SIGNUP_SUMMARY,
  SIGNUP_DESCRIPTION_SUCCESS,
  SIGNUP_DESCRIPTION_BAD_REQUEST,
} from '../swagger-definitions';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  /**
   * Endpoint to log in with username and password.
   * @param req The HTTP request object containing username and password.
   * @returns A JWT token upon successful login.
   */

  @Post('login')
  @ApiOperation({ operationId: 'login', summary: LOGIN_SUMMARY, description: LOGIN_DESCRIPTION_SUCCESS, tags: ['auth'] })
  @ApiBody({ type: LoginDto })
  @ApiResponse({ status: 201, description: LOGIN_DESCRIPTION_SUCCESS })
  async login(@Request() req) {
    const result = await this.authService.login(req.body);
    return new SuccessResponse(LOGIN_DESCRIPTION_SUCCESS, result);
  }

  /**
   * Endpoint to get user profile information.
   * Requires JWT authentication.
   * @param req The HTTP request object containing user profile information.
   * @returns User profile data.
   */
  @UseGuards(JwtAuthGuard)
  @Post('profile')
  @ApiBearerAuth()
  @ApiOperation({ operationId: 'profile', summary: PROFILE_SUMMARY, description: PROFILE_DESCRIPTION_SUCCESS, tags: ['auth'] })
  @ApiResponse({ status: 200, description: PROFILE_DESCRIPTION_SUCCESS, type: ProfileDto, })
  @ApiResponse({ status: 401, description: PROFILE_DESCRIPTION_UNAUTHORIZED })
  getProfile(@Request() req) {
    return new SuccessResponse(LOGIN_DESCRIPTION_SUCCESS, req.user);
  }

  /**
   * Endpoint to signup new user.
   * @param req The HTTP request object containing user profile information.
   * @returns retrive saved data.
   */
  @Post('signup')
  @ApiOperation({ operationId: 'signup', summary: SIGNUP_SUMMARY, description: SIGNUP_DESCRIPTION_SUCCESS, tags: ['auth'] })
  @ApiBody({ type: CreateUserDto })
  @ApiResponse({ status: 400, description: SIGNUP_DESCRIPTION_BAD_REQUEST })
  async create(@Body() createUserDto: CreateUserDto) {
    const result = await this.authService.create(createUserDto);
    return new SuccessResponse(SIGNUP_DESCRIPTION_SUCCESS, result);
  }
}
