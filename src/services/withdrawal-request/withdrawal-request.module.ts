import { Module } from '@nestjs/common';
import { WithdrawalRequestService } from './withdrawal-request.service';
import { WithdrawalRequestResolver } from './withdrawal-request.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { WithdrawalRequestController } from './withdrawal-request.controller';

@Module({
  providers: [
    PrismaService,
    WithdrawalRequestResolver,
    WithdrawalRequestController,
    WithdrawalRequestService,
  ],
  exports: [WithdrawalRequestController],
})
export class WithdrawalRequestModule {}
