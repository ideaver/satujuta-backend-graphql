import { Module } from '@nestjs/common';
import { FileService } from './file.service';
import { FileResolver } from './file.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { FileController } from './file.controller';

@Module({
  providers: [PrismaService, FileResolver, FileController, FileService],
  exports: [FileController],
})
export class FileModule {}
