import { Global, Module } from '@nestjs/common';
import { UploaderService } from './uploader.service';
import { UploaderResolver } from './upload.resolver';
import { UserModule } from '../user/user.module';
import { TransactionModule } from '../transaction/transaction.module';
import { WithdrawalRequestModule } from '../withdrawal-request/withdrawal-request.module';
import { BankModule } from '../bank/bank.module';
import { FileModule } from '../file/file.module';
import { ImagesModule } from '../images/images.module';

@Global()
@Module({
  providers: [UploaderService, UploaderResolver],
  imports: [
    UserModule,
    TransactionModule,
    WithdrawalRequestModule,
    BankModule,
    FileModule,
    ImagesModule,
  ],
  exports: [UploaderService],
})
export class UploaderModule {}
