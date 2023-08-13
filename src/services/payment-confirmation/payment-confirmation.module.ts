import { Module } from '@nestjs/common';
import { PaymentConfirmationService } from './payment-confirmation.service';
import { PaymentConfirmationResolver } from './payment-confirmation.resolver';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  providers: [PrismaService,PaymentConfirmationResolver, PaymentConfirmationService]
})
export class PaymentConfirmationModule {}
