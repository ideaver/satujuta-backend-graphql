import { Module } from '@nestjs/common';
import { RewardService } from './reward.service';
import { RewardResolver } from './reward.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { RewardController } from './reward.controller';

@Module({
  providers: [PrismaService, RewardResolver, RewardController, RewardService],
  exports: [RewardController],
})
export class RewardModule {}
