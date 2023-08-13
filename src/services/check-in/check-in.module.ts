import { Module } from '@nestjs/common';
import { CheckInService } from './check-in.service';
import { CheckInResolver } from './check-in.resolver';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  providers: [PrismaService,CheckInResolver, CheckInService]
})
export class CheckInModule {}
