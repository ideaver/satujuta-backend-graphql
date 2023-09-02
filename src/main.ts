import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { IExceptionFilter } from './utils/exception/custom-exception-filter';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.useGlobalPipes(new ValidationPipe());
  // app.useGlobalFilters(new IExceptionFilter()); //doesn't work
  const configService = app.get(ConfigService);

  const port = configService.get<number>('APP_PORT');
  const environment = configService.get<string>('NODE_ENV');
  await app.listen(port);
  console.log(`Application is running in ${environment} mode on port ${port}`);
}
bootstrap();
