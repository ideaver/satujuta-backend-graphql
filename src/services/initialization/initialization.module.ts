// initialization.module.ts
import { Module } from '@nestjs/common';
import { InitializationService } from './initialization.service';
import { PrismaService } from 'prisma/prisma.service';
import { ProgramModule } from '../program/program.module';

@Module({
  providers: [InitializationService, PrismaService],
  exports: [InitializationService],
  imports: [ProgramModule],
})
export class InitializationModule {}
