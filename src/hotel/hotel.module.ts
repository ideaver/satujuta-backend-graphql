import { Module } from '@nestjs/common';
import { HotelService } from './hotel.service';
import { HotelResolver } from './hotel.resolver';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  providers: [PrismaService, HotelResolver, HotelService],
})
export class HotelModule {}
