// initialization.module.ts
import { Module } from '@nestjs/common';
import { InitializationService } from './initialization.service';
import { PrismaService } from 'prisma/prisma.service';
import { ProgramModule } from '../program/program.module';
import { ItemModule } from '../item/item.module';
import { BankModule } from '../bank/bank.module';
import { PaymentGatewayModule } from '../payment-gateway/payment-gateway.module';

@Module({
  providers: [InitializationService, PrismaService],
  exports: [InitializationService],
  imports: [ProgramModule, ItemModule, BankModule, PaymentGatewayModule],
})
export class InitializationModule {}
