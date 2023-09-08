import { Module } from '@nestjs/common';
import { ItemService } from './item.service';
import { ItemResolver } from './item.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { ItemController } from './item.controller';

@Module({
  providers: [PrismaService, ItemResolver, ItemController, ItemService],
  exports: [ItemController],
})
export class ItemModule {}
