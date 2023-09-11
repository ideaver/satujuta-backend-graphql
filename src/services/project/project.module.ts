import { Module } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectResolver } from './project.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { ProjectController } from './project.controller';
import { UserController } from '../user/user.controller';

@Module({
  providers: [
    PrismaService,
    ProjectResolver,
    ProjectController,
    ProjectService,
  ],
  imports: [UserController],
  exports: [ProjectController],
})
export class ProjectModule {}
