import { Module } from '@nestjs/common';
import { ProgramService } from './program.service';
import { ProgramResolver } from './program.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { ProgramController } from './program.controller';
import { ReplaceNullWithUndefinedInterceptor } from 'src/interceptor/replace-null-with-undefined.interceptor';

@Module({
  providers: [
    PrismaService,
    ProgramResolver,
    ProgramController,
    ProgramService,
  ],
  exports: [ProgramController],
})
export class ProgramModule {}
