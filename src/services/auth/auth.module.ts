import { Module } from '@nestjs/common';
import { AuthResolver } from './auth.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  providers: [
    PrismaService,
    AuthResolver,
    AuthController,
    LocalStrategy,
    JwtStrategy,
  ],
  imports: [
    PassportModule,
    UserModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        signOptions: { expiresIn: '60s' },
        secret: configService.get<string>('ENCRYPTION_TOKEN'),
      }),
      inject: [ConfigService],
    }),
  ],
})
export class AuthModule {}
