import { Module } from '@nestjs/common';
import { SchoolService } from './school.service';
import { SchoolResolver } from './school.resolver';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  providers: [PrismaService,SchoolResolver, SchoolService]
})
export class SchoolModule {}
