import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import { LoggingInterceptor } from './shared/interceptors/logging.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);

  app.useGlobalInterceptors(new LoggingInterceptor());
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(configService.get('PORT'), () => {
    console.info('\x1b[33m', `########## The service is currently running in the ${configService.get('NODE_ENV')} environment. ##########`, '\x1b[0m');
    console.info('\x1b[33m', `########## Service is running on port ${configService.get('PORT')}. ##########`, '\x1b[0m');
  });
}
bootstrap();
