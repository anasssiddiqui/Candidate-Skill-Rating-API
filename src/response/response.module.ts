// src/response/response.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Response } from './response.entity';
import { ResponseService } from './response.service';
import { ResponseController } from './response.controller';
import { UserModule } from '../user/user.module';
import { QuestionModule } from '../question/question.module';

@Module({
  imports: [TypeOrmModule.forFeature([Response]), UserModule, QuestionModule],
  providers: [ResponseService],
  controllers: [ResponseController],
})
export class ResponseModule {}
