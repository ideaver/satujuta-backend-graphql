// initialization.module.ts
import { Module } from '@nestjs/common';
import { InitializationService } from './initialization.service';
import { PrismaService } from 'prisma/prisma.service';
import { ProgramModule } from '../program/program.module';
import { ItemModule } from '../item/item.module';

@Module({
  providers: [InitializationService, PrismaService],
  exports: [InitializationService],
  imports: [ProgramModule, ItemModule],
})
export class InitializationModule {}
