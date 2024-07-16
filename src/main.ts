import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as express from 'express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Servir arquivos estáticos do Swagger
  app.use('/public', express.static(join(__dirname, '..', 'public')));

  const config = new DocumentBuilder()
    .setTitle('DrinkHub')
    .setDescription('Documentacao das Requisicoes http')
    .setVersion('1.0')
    .addTag('drinks')
    .addTag('ingredientes')
    .addTag('tags')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document, {
    customSiteTitle: 'DrinkHub API Documentation',
    customCssUrl: '/public/swagger-ui.css'
  });

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true
  }));

  await app.listen(3000);
}
bootstrap();

