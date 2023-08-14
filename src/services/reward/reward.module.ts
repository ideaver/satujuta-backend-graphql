import { Module } from '@nestjs/common';
import { RewardService } from './reward.service';
import { RewardResolver } from './reward.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { PointTransactionModule } from '../point-transaction/point-transaction.module';

@Module({
  providers: [PrismaService, RewardResolver, RewardService],
  imports: [PointTransactionModule],
})
export class RewardModule {}
