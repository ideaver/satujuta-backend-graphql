import { Module } from '@nestjs/common';
import { ProgramService } from './program.service';
import { ProgramResolver } from './program.resolver';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  providers: [PrismaService,ProgramResolver, ProgramService]
})
export class ProgramModule {}
