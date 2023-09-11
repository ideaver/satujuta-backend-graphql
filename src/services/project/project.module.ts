import { Module } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectResolver } from './project.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { ProjectController } from './project.controller';
import { UserModule } from '../user/user.module';

@Module({
  providers: [
    PrismaService,
    ProjectResolver,
    ProjectController,
    ProjectService,
  ],
  imports: [UserModule],
  exports: [ProjectController],
})
export class ProjectModule {}
