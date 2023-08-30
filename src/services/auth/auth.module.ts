import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';

@Module({
  providers: [
    PrismaService,
    AuthResolver,
    AuthController,
    AuthService,
    LocalStrategy,
  ],
  imports: [UserModule, PassportModule],
})
export class AuthModule {}
