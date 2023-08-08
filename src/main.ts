import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigModule } from '@nestjs/config';
import helmet from 'helmet';
import { ValidationPipe } from '@nestjs/common';
import express, { json, urlencoded } from 'express';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
   
 app.useGlobalPipes(new ValidationPipe());

 app.use(bodyParser.json({ limit: '512mb' }));
 app.use(bodyParser.urlencoded({ limit: '512mb', extended: true })); 
 app.use(json({ limit: '512mb' }));
 app.use(urlencoded({ extended: true, limit: '512mb' }));

  app.use(
    helmet({
      crossOriginResourcePolicy: false,
      hidePoweredBy: true,
    }),
  );
 app.enableCors({
  origin:process.env.ORIGIN
});

const server = await app.listen(process.env.PORT);
server.keepAliveTimeout = 61 * 1000;

}
bootstrap();

