import { Module } from '@nestjs/common';
import { HotelService } from './hotel.service';
import { HotelResolver } from './hotel.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { HotelController } from './hotel.controller';

@Module({
  providers: [PrismaService, HotelResolver, HotelController, HotelService],
})
export class HotelModule {}
