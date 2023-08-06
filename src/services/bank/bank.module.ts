import { Module } from '@nestjs/common';
import { BankService } from './bank.service';
import { BankResolver } from './bank.resolver';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  providers: [PrismaService, BankResolver, BankService],
})
export class BankModule {}
