// src/question/dto/create-question.dto.ts

import { IsNotEmpty, IsString, IsEnum } from 'class-validator';
import { DifficultyLevel } from '../question.entity';

export class CreateQuestionDto {
  @IsString()
  @IsNotEmpty()
  question: string;

  @IsEnum(DifficultyLevel)
  difficultyLevel: DifficultyLevel;
}
