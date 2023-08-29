import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';

@Module({
  providers: [PrismaService, AuthResolver, AuthController, AuthService],
  imports: [UserModule],
})
export class AuthModule {}
