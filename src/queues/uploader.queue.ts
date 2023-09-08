import { Process, Processor } from '@nestjs/bull';
import { Injectable, Logger } from '@nestjs/common';
import { UploaderService } from 'src/services/uploader/uploader.service';

@Injectable()
@Processor('uploader')
export class UploaderProcessor {
  constructor(private readonly uploaderService: UploaderService) {}
  private readonly logger = new Logger(UploaderProcessor.name);

  // This job will run within 24 hours
  @Process({ name: 'delete-orphaned-s3-objects', concurrency: 1 })
  async deleteOrphanedS3Objects() {
    try {
      // Calculate the delay in milliseconds for 24 hours
      const delayInMilliseconds = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
      // Delay the execution of the job
      await new Promise((resolve) => setTimeout(resolve, delayInMilliseconds));
      // Add the job to the queue with a 24-hour delay
      await this.uploaderService.deleteOrphanedS3Objects();
      this.logger.log('deleteOrphanedS3Objects: Success');
    } catch (error) {
      this.logger.error('deleteOrphanedS3Objects: Failed');
    }
  }
}
