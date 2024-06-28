import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) { }

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findByName(username);
    if (user && (await bcrypt.compare(pass, user.password))) {
      const { ...result } = user;
      return result;
    }
    return null;
  }

  async login(loginDto: LoginDto): Promise<{ access_token: string }> {
    const user = await this.usersService.findByName(loginDto.username);
    if (!user || !(await user.comparePassword(loginDto.password))) {
      throw new UnauthorizedException('Invalid credentials');
    }
    
    const payload = { username: user.name, sub: user.id, role: user.role };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async create(createUserDto: CreateUserDto) {
    const existingUser = await this.usersService.findByName(createUserDto.name);
    if (existingUser) {
      throw new ConflictException('Username already exists');
    }
    return this.usersService.create(createUserDto);
  }

}
