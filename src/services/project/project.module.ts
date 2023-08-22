import { Module } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectResolver } from './project.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { ProjectController } from './project.controller';
import { UserService } from '../user/user.service';

@Module({
  providers: [
    PrismaService,
    UserService,
    ProjectResolver,
    ProjectController,
    ProjectService,
  ],
})
export class ProjectModule {}
