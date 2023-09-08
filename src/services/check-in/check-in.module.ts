import { Module } from '@nestjs/common';

import { PrismaService } from 'prisma/prisma.service';
import { CheckInResolver } from './check-in.resolver';
import { CheckInController } from './check-in.controller';
import { CheckInService } from './check-in.service';

@Module({
  providers: [
    PrismaService,
    CheckInResolver,
    CheckInController,
    CheckInService,
  ],
  exports: [CheckInController],
})
export class CheckInModule {}
