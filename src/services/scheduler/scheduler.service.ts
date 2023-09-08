import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { UploaderService } from '../uploader/uploader.service';

@Injectable()
export class SchedulerService {
  constructor(private readonly uploaderService: UploaderService) {}
  private readonly logger = new Logger(SchedulerService.name);

  @Cron('0 0 * * 0') // Schedule every Sunday at midnight
  async deleteOrphanedS3Objects() {
    try {
      await this.uploaderService.deleteOrphanedS3Objects();
      this.logger.log('deleteOrphanedS3Objects scheduler: Success');
    } catch (error) {
      this.logger.error('deleteOrphanedS3Objects scheduler: Failed');
    }
  }
}
