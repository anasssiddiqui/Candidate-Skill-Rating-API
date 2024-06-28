import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { User } from './user/user.entity';
import { QuestionModule } from './question/question.module';
import { ResponseModule } from './response/response.module';
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
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    UserModule,
    AuthModule,
    QuestionModule,
    ResponseModule
  ],
})
export class AppModule { }
