import { Module } from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountResolver } from './account.resolver';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  providers: [PrismaService,AccountResolver, AccountService]
})
export class AccountModule {}
