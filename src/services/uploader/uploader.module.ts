import { Global, Module } from '@nestjs/common';
import { UploaderService } from './uploader.service';
import { UploaderResolver } from './upload.resolver';

@Global()
@Module({
  providers: [UploaderService, UploaderResolver],
  exports: [UploaderService],
})
export class UploaderModule {}
