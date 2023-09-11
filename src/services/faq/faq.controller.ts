import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { FaqService } from './faq.service';

@Injectable()
export class FaqController {
  constructor(private readonly faqService: FaqService) {}

  async createOne(faqCreateArgs: Prisma.FaqCreateArgs) {
    return await this.faqService.createOne(faqCreateArgs);
  }

  async createMany(faqCreateManyArgs: Prisma.FaqCreateManyArgs) {
    return await this.faqService.createMany(faqCreateManyArgs);
  }

  async findOne(faqFindUniqueArgs: Prisma.FaqFindUniqueArgs) {
    return await this.faqService.findOne(faqFindUniqueArgs);
  }

  async findMany(faqFindManyArgs: Prisma.FaqFindManyArgs) {
    return await this.faqService.findMany(faqFindManyArgs);
  }

  async findFirst(faqFindFirstArgs: Prisma.FaqFindFirstArgs) {
    return await this.faqService.findFirst(faqFindFirstArgs);
  }

  async updateOne(faqUpdateOneArgs: Prisma.FaqUpdateArgs) {
    return await this.faqService.updateOne(faqUpdateOneArgs);
  }

  async updateMany(faqUpdateManyArgs: Prisma.FaqUpdateManyArgs) {
    return await this.faqService.updateMany(faqUpdateManyArgs);
  }

  async delete(faqDeleteArgs: Prisma.FaqDeleteArgs) {
    return await this.faqService.delete(faqDeleteArgs);
  }

  async deleteMany(faqDeleteManyArgs: Prisma.FaqDeleteManyArgs) {
    return await this.faqService.deleteMany(faqDeleteManyArgs);
  }

  async aggregate(faqAggregateArgs: Prisma.FaqAggregateArgs) {
    return await this.faqService.aggregate(faqAggregateArgs);
  }

  async count(faqCountArgs: Prisma.FaqCountArgs) {
    return await this.faqService.count(faqCountArgs);
  }
}
