import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class FaqService {
  constructor(private prisma: PrismaService) {}

  async createOne(faqCreateArgs: Prisma.FaqCreateArgs) {
    try {
      return await this.prisma.faq.create(faqCreateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(faqCreateManyArgs: Prisma.FaqCreateManyArgs) {
    try {
      return await this.prisma.faq.createMany(faqCreateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(faqFindUniqueArgs: Prisma.FaqFindUniqueArgs) {
    try {
      return await this.prisma.faq.findUnique(faqFindUniqueArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(faqFindManyArgs: Prisma.FaqFindManyArgs) {
    try {
      return await this.prisma.faq.findMany(faqFindManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(faqFindFirstArgs: Prisma.FaqFindFirstArgs) {
    try {
      return await this.prisma.faq.findFirst(faqFindFirstArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(faqUpdateOneArgs: Prisma.FaqUpdateArgs) {
    try {
      return await this.prisma.faq.update(faqUpdateOneArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(faqUpdateManyArgs: Prisma.FaqUpdateManyArgs) {
    try {
      return await this.prisma.faq.updateMany(faqUpdateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(faqDeleteArgs: Prisma.FaqDeleteArgs) {
    try {
      await this.prisma.faq.delete(faqDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(faqDeleteManyArgs: Prisma.FaqDeleteManyArgs) {
    try {
      await this.prisma.faq.deleteMany(faqDeleteManyArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(faqAggregateArgs: Prisma.FaqAggregateArgs) {
    try {
      return await this.prisma.faq.aggregate(faqAggregateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(faqCountArgs: Prisma.FaqCountArgs) {
    try {
      return await this.prisma.faq.count(faqCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}
