// src/response/dto/create-response.dto.ts

import { IsNotEmpty, IsNumber, IsString, IsOptional } from 'class-validator';

export class CreateResponseDto {
  @IsNumber()
  @IsNotEmpty()
  skillId: number;

  @IsString()
  @IsNotEmpty()
  response: string;

  @IsOptional()
  @IsNumber()
  rating?: number;
}
