import { Module } from '@nestjs/common';
import { ShippingService } from './shipping.service';
import { ShippingResolver } from './shipping.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { ShippingController } from './shipping.controller';

@Module({
  providers: [
    PrismaService,
    ShippingResolver,
    ShippingController,
    ShippingService,
  ],
  exports: [ShippingController],
})
export class ShippingModule {}
