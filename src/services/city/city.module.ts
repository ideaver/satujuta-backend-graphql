import { Module } from '@nestjs/common';
import { CityService } from './city.service';
import { CityResolver } from './city.resolver';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  providers: [PrismaService, CityResolver, CityService],
})
export class CityModule {}
