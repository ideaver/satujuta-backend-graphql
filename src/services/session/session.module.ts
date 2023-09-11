import { Module } from '@nestjs/common';
import { SessionService } from './session.service';
import { SessionResolver } from './session.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { SessionController } from './session.controller';

@Module({
  providers: [
    PrismaService,
    SessionResolver,
    SessionController,
    SessionService,
  ],
  exports: [SessionController],
})
export class SessionModule {}
