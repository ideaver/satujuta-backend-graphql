import { Module } from '@nestjs/common';
import { WithdrawalRequestService } from './withdrawal-request.service';
import { WithdrawalRequestResolver } from './withdrawal-request.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { WithdrawalRequestController } from './withdrawal-request.controller';
import { AccountModule } from '../account/account.module';

@Module({
  providers: [
    PrismaService,
    WithdrawalRequestResolver,
    WithdrawalRequestController,
    WithdrawalRequestService,
  ],
  imports: [AccountModule],
  exports: [WithdrawalRequestController],
})
export class WithdrawalRequestModule {}
