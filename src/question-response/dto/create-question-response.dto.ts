import { IsEnum, IsInt, IsOptional, IsString } from 'class-validator';
import { DifficultyLevel } from '../question-response.entity';

export class CreateQuestionResponseDto {
  @IsInt()
  skillId: number;

  @IsEnum(DifficultyLevel)
  difficultyLevel: DifficultyLevel;

  @IsString()
  question: string;

  @IsString()
  @IsOptional()
  response?: string;

  @IsInt()
  @IsOptional()
  rating?: number;
}
