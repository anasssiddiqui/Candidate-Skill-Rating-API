import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerOptions = new DocumentBuilder()
  .setTitle('Your Application API')
  .setDescription('API documentation for your application')
  .setVersion('1.0')
  .addBearerAuth()
  .build();
