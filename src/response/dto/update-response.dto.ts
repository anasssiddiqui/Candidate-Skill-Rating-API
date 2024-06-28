// src/response/dto/update-response.dto.ts

import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateResponseDto {
  @IsOptional()
  @IsNumber()
  skillId?: number;

  @IsOptional()
  @IsString()
  response?: string;

  @IsOptional()
  @IsNumber()
  rating?: number;
}
