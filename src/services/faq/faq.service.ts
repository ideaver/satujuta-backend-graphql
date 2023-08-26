import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { CreateOneFaqArgs, Faq } from 'src/@generated';
import { FaqFindManyArgs } from './dto/faq-find-many.args';
import { FaqFindUniqueArgs } from './dto/faq-find-one.args';
import { FaqUpdateOneArgs } from './dto/faq-update-one.args';

@Injectable()
export class FaqService {
  constructor(private prisma: PrismaService) {}

  async createOne(faqCreateArgs: CreateOneFaqArgs): Promise<Faq | void> {
    return await this.prisma.faq
      .create(faqCreateArgs)
      .then((faq) => {
        return faq;
      })
      .catch((err) => {
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }

  async findMany(faqFindManyArgs: FaqFindManyArgs) {
    return this.prisma.faq
      .findMany(faqFindManyArgs)
      .then((faqs) => {
        return faqs;
      })
      .catch((err) => {
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }

  async findOne(faqFindUniqueArgs: FaqFindUniqueArgs): Promise<Faq | void> {
    return await this.prisma.faq
      .findUnique(faqFindUniqueArgs)
      .then((faq) => {
        return faq;
      })
      .catch((err) => {
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }

  async update(faqUpdateOneArgs: FaqUpdateOneArgs): Promise<Faq | void> {
    return this.prisma.faq
      .update(faqUpdateOneArgs)
      .then((faq) => {
        return faq;
      })
      .catch((err) => {
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }

  async remove(faqId: number): Promise<boolean | void> {
    return await this.prisma.faq
      .delete({
        where: { id: faqId },
      })
      .then(() => {
        return true;
      })
      .catch((err) => {
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }
}
