import { Module } from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountResolver } from './account.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { TransactionModule } from '../transaction/transaction.module';

@Module({
  providers: [PrismaService, AccountResolver, AccountService],
  imports: [TransactionModule],
})
export class AccountModule {}
