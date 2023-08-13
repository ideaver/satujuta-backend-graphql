import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { throwPrismaError } from 'src/utils/throw-prisma-error.function';
import { CreateOnePaymentArgs, Payment } from 'src/@generated';
import { PaymentFindManyArgs } from './dto/payment-find-many.args';
import { PaymentFindUniqueArgs } from './dto/payment-find-one.args';
import { PaymentUpdateOneArgs } from './dto/payment-update-one.args';

@Injectable()
export class PaymentService {
  constructor(private prisma: PrismaService) {}

  async createOne(paymentCreateArgs: CreateOnePaymentArgs): Promise<Payment | void> {

    return await this.prisma.payment
      .create(paymentCreateArgs)
      .then((payment) => {
        return payment;
      })
      .catch((err) => {
        throwPrismaError(err);
      });
  }

  async findMany(paymentFindManyArgs: PaymentFindManyArgs) {
    return this.prisma.payment
      .findMany(paymentFindManyArgs)
      .then((payments) => {
        return payments;
      })
      .catch((err) => {
        throwPrismaError(err);
      });
  }

  async findOne(paymentFindUniqueArgs: PaymentFindUniqueArgs): Promise<Payment | void> {
    return await this.prisma.payment
      .findUnique(paymentFindUniqueArgs)
      .then((payment) => {
        return payment;
      })
      .catch((err) => {
        throwPrismaError(err);
      });
  }

  async update(paymentUpdateOneArgs: PaymentUpdateOneArgs): Promise<Payment | void> {
    return this.prisma.payment
      .update(paymentUpdateOneArgs)
      .then((payment) => {
        return payment;
      })
      .catch((err) => {
        throwPrismaError(err);
      });
  }

  async remove(paymentId: number): Promise<boolean | void>{
    return await this.prisma.payment
      .delete({
        where: { id: paymentId },
      })
      .then(() => {
        return true;
      })
      .catch((err) => {
        throwPrismaError(err);
      });
  }
}
