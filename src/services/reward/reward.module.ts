import { Module } from '@nestjs/common';
import { RewardService } from './reward.service';
import { RewardResolver } from './reward.resolver';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  providers: [PrismaService,RewardResolver, RewardService]
})
export class RewardModule {}
