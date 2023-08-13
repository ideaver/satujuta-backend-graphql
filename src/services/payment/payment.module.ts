import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentResolver } from './payment.resolver';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  providers: [PrismaService,PaymentResolver, PaymentService]
})
export class PaymentModule {}
