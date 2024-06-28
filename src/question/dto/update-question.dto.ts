// src/question/dto/update-question.dto.ts

import { IsString, IsEnum, IsOptional } from 'class-validator';
import { DifficultyLevel } from '../question.entity';

export class UpdateQuestionDto {
  @IsOptional()
  @IsString()
  question?: string;

  @IsOptional()
  @IsEnum(DifficultyLevel)
  difficultyLevel?: DifficultyLevel;
}
