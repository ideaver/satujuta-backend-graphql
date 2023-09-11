import { Module } from '@nestjs/common';
import { FaqService } from './faq.service';
import { FaqResolver } from './faq.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { FaqController } from './faq.controller';

@Module({
  providers: [PrismaService, FaqResolver, FaqController, FaqService],
  exports: [FaqController],
})
export class FaqModule {}
