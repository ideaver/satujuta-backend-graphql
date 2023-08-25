import { Module } from '@nestjs/common';
import { WithdrawalRequestService } from './withdrawal-request.service';
import { WithdrawalRequestResolver } from './withdrawal-request.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { PointTransactionModule } from '../point-transaction/point-transaction.module';
import { WithdrawalRequestController } from './withdrawal-request.controller';
import { UserModule } from '../user/user.module';
import { AccountModule } from '../account/account.module';

@Module({
  providers: [
    PrismaService,
    WithdrawalRequestResolver,
    WithdrawalRequestController,
    WithdrawalRequestService,
  ],
  imports: [AccountModule],
})
export class WithdrawalRequestModule {}
