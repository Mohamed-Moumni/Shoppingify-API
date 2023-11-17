import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { PrismaExeceptionFilter } from './PrismaFilters/prismaClient.filter';
import { configService } from './config/config.service';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('api');
  app.use(cookieParser());
  const options = new DocumentBuilder()
    .setTitle('Shoppingify Api')
    .setDescription('The Documentation of Shoppingify API')
    .setVersion('1.0')
    .addServer(`${configService.getValue('HOST')}:${configService.getValue('PORT')}`, 'Local environment')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);

  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new PrismaExeceptionFilter(httpAdapter));

  await app.listen(3000);
}
bootstrap();
