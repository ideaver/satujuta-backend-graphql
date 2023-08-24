import { Module } from '@nestjs/common';
import { RewardClaimService } from './reward-claim.service';
import { RewardClaimResolver } from './reward-claim.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { RewardClaimController } from './reward-claim.controller';
import { RewardModule } from '../reward/reward.module';

@Module({
  providers: [
    PrismaService,
    RewardClaimResolver,
    RewardClaimController,
    RewardClaimService,
  ],
  imports: [RewardModule],
})
export class RewardClaimModule {}
