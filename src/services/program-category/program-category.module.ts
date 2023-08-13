import { Module } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { ProgramCategoryResolver } from './program-category.resolver';
import { ProgramCategoryService } from './program-category.service';

@Module({
  providers: [PrismaService,ProgramCategoryResolver, ProgramCategoryService]
})
export class ProgramCategoryModule {}
