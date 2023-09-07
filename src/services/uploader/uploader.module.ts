import { Global, Module } from '@nestjs/common';
import { UploaderService } from './uploader.service';
import { UploaderResolver } from './upload.resolver';
import { UserModule } from '../user/user.module';

@Global()
@Module({
  providers: [UploaderService, UploaderResolver],
  imports: [UserModule],
  exports: [UploaderService],
})
export class UploaderModule {}
