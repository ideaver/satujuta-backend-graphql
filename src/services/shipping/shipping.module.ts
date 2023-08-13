import { Module } from '@nestjs/common';
import { ShippingService } from './shipping.service';
import { ShippingResolver } from './shipping.resolver';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  providers: [PrismaService,ShippingResolver, ShippingService]
})
export class ShippingModule {}
