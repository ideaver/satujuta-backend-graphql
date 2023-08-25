import { Module } from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountResolver } from './account.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { TransactionModule } from '../transaction/transaction.module';
import { AccountController } from './account.controller';
import { UserModule } from '../user/user.module';

@Module({
  providers: [
    PrismaService,
    AccountResolver,
    AccountController,
    AccountService,
  ],
  imports: [TransactionModule, UserModule],
})
export class AccountModule {}
