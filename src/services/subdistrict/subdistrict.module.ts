import { Module } from '@nestjs/common';
import { SubdistrictService } from './subdistrict.service';
import { SubdistrictResolver } from './subdistrict.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { SubdistrictController } from './subdistrict.controller';

@Module({
  providers: [
    PrismaService,
    SubdistrictResolver,
    SubdistrictController,
    SubdistrictService,
  ],
})
export class SubdistrictModule {}
