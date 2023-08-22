import { Module } from '@nestjs/common';
import { CityService } from './city.service';
import { CityResolver } from './city.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { PointTransactionModule } from '../point-transaction/point-transaction.module';
import { CityController } from './city.controller';

@Module({
  providers: [PrismaService, CityResolver, CityController, CityService],
})
export class CityModule {}
