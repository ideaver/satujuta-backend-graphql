import { Module } from '@nestjs/common';
import { AddressService } from './address.service';
import { AddressResolver } from './address.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { PointTransactionModule } from '../point-transaction/point-transaction.module';
import { AddressController } from './address.controller';
import { UserModule } from '../user/user.module';

@Module({
  providers: [
    PrismaService,
    AddressResolver,
    AddressController,
    AddressService,
  ],
})
export class AddressModule {}
