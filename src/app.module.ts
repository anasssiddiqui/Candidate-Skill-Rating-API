import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { QuestionResponseModule } from './question-response/question-response.module';
import { AuthModule } from './auth/auth.module';
import { User } from './user/user.entity';
import { QuestionResponse } from './question-response/question-response.entity';

@Module({
  // Used .env file for getting this credentials
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '#root123',
      database: 'demo',
      entities: [User, QuestionResponse],
      synchronize: true,
    }),
    UserModule,
    QuestionResponseModule,
    AuthModule,
  ],
})
export class AppModule {}
