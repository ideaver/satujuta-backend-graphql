import { Module } from '@nestjs/common';
import { FaqService } from './faq.service';
import { FaqResolver } from './faq.resolver';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  providers: [PrismaService,FaqResolver, FaqService]
})
export class FaqModule {}
