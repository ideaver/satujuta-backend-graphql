import { Module } from '@nestjs/common';
import { ProvinceService } from './province.service';
import { ProvinceResolver } from './province.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { ProvinceController } from './province.controller';

@Module({
  providers: [
    PrismaService,
    ProvinceResolver,
    ProvinceController,
    ProvinceService,
  ],
  exports: [ProvinceController],
})
export class ProvinceModule {}
