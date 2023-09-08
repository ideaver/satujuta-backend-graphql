import { Module } from '@nestjs/common';
import { ImagesService } from './images.service';
import { ImagesResolver } from './images.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { ImagesController } from './images.controller';

@Module({
  providers: [PrismaService, ImagesResolver, ImagesController, ImagesService],
  exports: [ImagesController],
})
export class ImagesModule {}
