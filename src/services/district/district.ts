import { Module } from '@nestjs/common';
import { DistrictService } from './district.service';
import { DistrictResolver } from './district.resolver';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  providers: [PrismaService, DistrictResolver, DistrictService],
})
export class DistrictModule {}
