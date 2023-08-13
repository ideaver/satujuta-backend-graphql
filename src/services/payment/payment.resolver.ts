import { Resolver, Query, Mutation, Args, Info } from '@nestjs/graphql';
import { PaymentService } from './payment.service';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import { Payment } from 'src/@generated';
import { PaymentCreateArgs } from './dto/payment-create-one.args';
import { PaymentFindManyArgs } from './dto/payment-find-many.args';
import { PaymentFindUniqueArgs } from './dto/payment-find-one.args';
import { PaymentUpdateOneArgs } from './dto/payment-update-one.args';

interface PaymentSelect {
  select: Prisma.PaymentSelect;
}

@Resolver(() => Payment)
export class PaymentResolver {
  constructor(private readonly paymentService: PaymentService) {}

  @Mutation(() => Payment, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async paymentCreateOne(
    @Args('paymentCreateArgs') paymentCreateArgs: PaymentCreateArgs,
    @Relations() relations: PaymentSelect
  ): Promise<Payment | void> {
    paymentCreateArgs.select = relations.select;
    return await this.paymentService.createOne(paymentCreateArgs);
  }

  @Query(() => [Payment], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  paymentFindMany(
    @Args('paymentFindManyArgs') paymentFindManyArgs: PaymentFindManyArgs,
    @Relations() relations: PaymentSelect,
  ) {
    //Auto implement prisma select from graphql query info
    paymentFindManyArgs.select = relations.select;
    return this.paymentService.findMany(paymentFindManyArgs);
  }

  @Query(() => Payment, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  paymentFindOne(
    @Args('paymentFindUniqueArgs')
    paymentFindUniqueArgs: PaymentFindUniqueArgs,
    @Relations() relations: PaymentSelect,
  ) {
    //Auto implement prisma select from graphql query info
    paymentFindUniqueArgs.select = relations.select;
    return this.paymentService.findOne(paymentFindUniqueArgs);
  }

  @Mutation(() => Payment, { description: 'Deskripsinya ada disini loh' })
  paymentUpdateOne(
    @Args('paymentUpdateOneArgs') paymentUpdateOneArgs: PaymentUpdateOneArgs,
    @Relations() relations: PaymentSelect,
  ) {
    paymentUpdateOneArgs.select = relations.select;
    return this.paymentService.update(paymentUpdateOneArgs);
  }

  @Mutation(() => Boolean, {
    nullable: true,
    description:
      'Datanya benar2 terhapus dari db',
  })
  paymentRemove(@Args('paymentId') paymentId: number) {
    return this.paymentService.remove(paymentId);
  }
}
