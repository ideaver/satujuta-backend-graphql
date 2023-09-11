import { Module } from '@nestjs/common';
import { ProgramCategoryService } from './program-category.service';
import { ProgramCategoryResolver } from './program-category.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { ProgramCategoryController } from './program-category.controller';

@Module({
  providers: [
    PrismaService,
    ProgramCategoryResolver,
    ProgramCategoryController,
    ProgramCategoryService,
  ],
  exports: [ProgramCategoryController],
})
export class ProgramCategoryModule {}
