import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { validateConfig } from './config-validation';
import { configurations } from './config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [...configurations],
      isGlobal: true,
      validate: validateConfig, // config validator
    }),
  ],
})
export class ConfigsModule {}
