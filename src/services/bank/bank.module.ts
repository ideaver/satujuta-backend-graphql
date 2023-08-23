import { Module } from '@nestjs/common';
import { BankService } from './bank.service';
import { BankResolver } from './bank.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { PointTransactionModule } from '../point-transaction/point-transaction.module';
import { BankController } from './bank.controller';
import { UserModule } from '../user/user.module';

@Module({
  providers: [PrismaService, BankResolver, BankController, BankService],
  imports: [UserModule],
})
export class BankModule {}
