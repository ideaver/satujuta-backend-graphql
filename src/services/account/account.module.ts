import { Module, forwardRef } from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountResolver } from './account.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { AccountController } from './account.controller';
import { TransactionModule } from '../transaction/transaction.module';
import { UserModule } from '../user/user.module';

@Module({
  providers: [
    PrismaService,
    AccountResolver,
    AccountController,
    AccountService,
  ],
  imports: [forwardRef(() => TransactionModule), UserModule],
  exports: [AccountController],
})
export class AccountModule {}
