import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from './shared/interceptors/logging.interceptor';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: `.env.${process.env.NODE_ENV || 'development'}` }),
    MongooseModule.forRootAsync({ // ใช้แทนแบบ forRoot ปกติเพื่อให้เรียกใช้ค่าจาก ConfigService แทนได้
        imports: [ConfigModule],
        useFactory: (configService: ConfigService) => ({
          uri: configService.get<string>('MONGODB_URI'),
        }),
        inject: [ConfigService],
      }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
