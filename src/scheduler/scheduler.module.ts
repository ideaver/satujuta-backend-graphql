import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { SchedulerService } from './scheduler.service';
import { ImagesModule } from 'src/services/images/images.module';

@Module({
  imports: [ScheduleModule.forRoot(), ImagesModule],
  providers: [SchedulerService],
})
export class SchedulerModule {}
