import { Module } from '@nestjs/common';
import { ProvinceService } from './province.service';
import { ProvinceResolver } from './province.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { PointTransactionModule } from '../point-transaction/point-transaction.module';
import { ProvinceController } from './province.controller';

@Module({
  providers: [
    PrismaService,
    ProvinceResolver,
    ProvinceController,
    ProvinceService,
  ],
})
export class ProvinceModule {}
