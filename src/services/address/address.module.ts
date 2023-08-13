import { Module } from '@nestjs/common';
import { AddressService } from './address.service';
import { AddressResolver } from './address.resolver';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  providers: [PrismaService,AddressResolver, AddressService]
})
export class AddressModule {}
