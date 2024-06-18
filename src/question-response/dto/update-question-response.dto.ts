import { PartialType } from '@nestjs/mapped-types';
import { CreateQuestionResponseDto } from './create-question-response.dto';

export class UpdateQuestionResponseDto extends PartialType(
  CreateQuestionResponseDto,
) {}
