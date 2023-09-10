import { Module } from '@nestjs/common';
import { DistrictService } from './district.service';
import { DistrictResolver } from './district.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { DistrictController } from './district.controller';

@Module({
  providers: [
    PrismaService,
    DistrictResolver,
    DistrictController,
    DistrictService,
  ],
  exports: [DistrictController],
})
export class DistrictModule {}
