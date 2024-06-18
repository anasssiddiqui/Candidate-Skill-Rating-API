/* eslint-disable prettier/prettier */
import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import {ApiTags,ApiOperation,ApiResponse,ApiBody,ApiBearerAuth,} from '@nestjs/swagger';
import { LoginDto } from './dto/login.dto';
import { ProfileDto } from './dto/profile.dto';
import { swaggerOptions } from '../swagger';
import {
  LOGIN_SUMMARY,
  LOGIN_DESCRIPTION_SUCCESS,
  LOGIN_DESCRIPTION_UNAUTHORIZED,
  PROFILE_SUMMARY,
  PROFILE_DESCRIPTION_SUCCESS,
  PROFILE_DESCRIPTION_UNAUTHORIZED,
} from '../swagger-definitions';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  /**
   * Endpoint to log in with username and password.
   * @param req The HTTP request object containing username and password.
   * @returns A JWT token upon successful login.
   */
  @Post('login')
  @ApiOperation({...swaggerOptions,operationId: 'login',summary: LOGIN_SUMMARY,description: LOGIN_DESCRIPTION_SUCCESS,tags: ['auth'],})
  @ApiBody({ type: LoginDto })
  @ApiResponse({ status: 201, description: LOGIN_DESCRIPTION_SUCCESS })
  @ApiResponse({ status: 401, description: LOGIN_DESCRIPTION_UNAUTHORIZED })
  async login(@Request() req) {
    return this.authService.login(req.body);
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
  @ApiOperation({...swaggerOptions,operationId: 'profile',summary: PROFILE_SUMMARY,description: PROFILE_DESCRIPTION_SUCCESS,tags: ['auth']})
  @ApiResponse({status: 200,description: PROFILE_DESCRIPTION_SUCCESS,type: ProfileDto})
  @ApiResponse({ status: 401, description: PROFILE_DESCRIPTION_UNAUTHORIZED })
  getProfile(@Request() req) {return req.user;}
}
