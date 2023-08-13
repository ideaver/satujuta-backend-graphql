import { Module } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectResolver } from './project.resolver';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  providers: [PrismaService,ProjectResolver, ProjectService]
})
export class ProjectModule {}
