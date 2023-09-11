import { Module } from '@nestjs/common';
import { SchoolService } from './school.service';
import { SchoolResolver } from './school.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { SchoolController } from './school.controller';

@Module({
  providers: [PrismaService, SchoolResolver, SchoolController, SchoolService],
  exports: [SchoolController],
})
export class SchoolModule {}
