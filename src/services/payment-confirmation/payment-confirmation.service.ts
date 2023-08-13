import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { throwPrismaError } from 'src/utils/throw-prisma-error.function';
import { CreateOnePaymentConfirmationArgs, PaymentConfirmation } from 'src/@generated';
import { PaymentConfirmationFindManyArgs } from './dto/payment-confirmation-find-many.args';
import { PaymentConfirmationFindUniqueArgs } from './dto/payment-confirmation-find-one.args';
import { PaymentConfirmationUpdateOneArgs } from './dto/payment-confirmation-update-one.args';

@Injectable()
export class PaymentConfirmationService {
  constructor(private prisma: PrismaService) {}

  async createOne(paymentConfirmationCreateArgs: CreateOnePaymentConfirmationArgs): Promise<PaymentConfirmation | void> {

    return await this.prisma.paymentConfirmation
      .create(paymentConfirmationCreateArgs)
      .then((paymentConfirmation) => {
        return paymentConfirmation;
      })
      .catch((err) => {
        throwPrismaError(err);
      });
  }

  async findMany(paymentConfirmationFindManyArgs: PaymentConfirmationFindManyArgs) {
    return this.prisma.paymentConfirmation
      .findMany(paymentConfirmationFindManyArgs)
      .then((paymentConfirmations) => {
        return paymentConfirmations;
      })
      .catch((err) => {
        throwPrismaError(err);
      });
  }

  async findOne(paymentConfirmationFindUniqueArgs: PaymentConfirmationFindUniqueArgs): Promise<PaymentConfirmation | void> {
    return await this.prisma.paymentConfirmation
      .findUnique(paymentConfirmationFindUniqueArgs)
      .then((paymentConfirmation) => {
        return paymentConfirmation;
      })
      .catch((err) => {
        throwPrismaError(err);
      });
  }

  async update(paymentConfirmationUpdateOneArgs: PaymentConfirmationUpdateOneArgs): Promise<PaymentConfirmation | void> {
    return this.prisma.paymentConfirmation
      .update(paymentConfirmationUpdateOneArgs)
      .then((paymentConfirmation) => {
        return paymentConfirmation;
      })
      .catch((err) => {
        throwPrismaError(err);
      });
  }

  async remove(paymentConfirmationId: number): Promise<boolean | void>{
    return await this.prisma.paymentConfirmation
      .delete({
        where: { id: paymentConfirmationId },
      })
      .then(() => {
        return true;
      })
      .catch((err) => {
        throwPrismaError(err);
      });
  }
}
