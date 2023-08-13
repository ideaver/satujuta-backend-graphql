import { Module } from '@nestjs/common';
import { SessionService } from './session.service';
import { SessionResolver } from './session.resolver';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  providers: [PrismaService,SessionResolver, SessionService]
})
export class SessionModule {}
