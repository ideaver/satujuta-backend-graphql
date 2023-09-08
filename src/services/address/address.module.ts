import { Module } from '@nestjs/common';
import { AddressService } from './address.service';
import { AddressResolver } from './address.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { AddressController } from './address.controller';

@Module({
  providers: [
    PrismaService,
    AddressResolver,
    AddressController,
    AddressService,
  ],
  exports: [AddressController],
})
export class AddressModule {}
