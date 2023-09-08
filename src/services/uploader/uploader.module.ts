import { Global, Module } from '@nestjs/common';
import { UploaderService } from './uploader.service';
import { UploaderResolver } from './upload.resolver';
import { UserModule } from '../user/user.module';
import { TransactionModule } from '../transaction/transaction.module';
import { WithdrawalRequestModule } from '../withdrawal-request/withdrawal-request.module';
import { BankModule } from '../bank/bank.module';

@Global()
@Module({
  providers: [UploaderService, UploaderResolver],
  imports: [UserModule, TransactionModule, WithdrawalRequestModule, BankModule],
  exports: [UploaderService],
})
export class UploaderModule {}
