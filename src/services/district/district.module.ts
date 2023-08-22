import { Module } from '@nestjs/common';
import { DistrictService } from './district.service';
import { DistrictResolver } from './district.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { PointTransactionModule } from '../point-transaction/point-transaction.module';
import { DistrictController } from './district.controller';

@Module({
  providers: [
    PrismaService,
    DistrictResolver,
    DistrictController,
    DistrictService,
  ],
  imports: [PointTransactionModule],
})
export class DistrictModule {}
