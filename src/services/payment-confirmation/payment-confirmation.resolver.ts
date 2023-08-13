import { Resolver, Query, Mutation, Args, Info } from '@nestjs/graphql';
import { PaymentConfirmationService } from './payment-confirmation.service';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import { PaymentConfirmation } from 'src/@generated';
import { PaymentConfirmationCreateArgs } from './dto/payment-confirmation-create-one.args';
import { PaymentConfirmationFindManyArgs } from './dto/payment-confirmation-find-many.args';
import { PaymentConfirmationFindUniqueArgs } from './dto/payment-confirmation-find-one.args';
import { PaymentConfirmationUpdateOneArgs } from './dto/payment-confirmation-update-one.args';

interface PaymentConfirmationSelect {
  select: Prisma.PaymentConfirmationSelect;
}

@Resolver(() => PaymentConfirmation)
export class PaymentConfirmationResolver {
  constructor(private readonly paymentConfirmationService: PaymentConfirmationService) {}

  @Mutation(() => PaymentConfirmation, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async paymentConfirmationCreateOne(
    @Args('paymentConfirmationCreateArgs') paymentConfirmationCreateArgs: PaymentConfirmationCreateArgs,
    @Relations() relations: PaymentConfirmationSelect
  ): Promise<PaymentConfirmation | void> {
    paymentConfirmationCreateArgs.select = relations.select;
    return await this.paymentConfirmationService.createOne(paymentConfirmationCreateArgs);
  }

  @Query(() => [PaymentConfirmation], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  paymentConfirmationFindMany(
    @Args('paymentConfirmationFindManyArgs') paymentConfirmationFindManyArgs: PaymentConfirmationFindManyArgs,
    @Relations() relations: PaymentConfirmationSelect,
  ) {
    //Auto implement prisma select from graphql query info
    paymentConfirmationFindManyArgs.select = relations.select;
    return this.paymentConfirmationService.findMany(paymentConfirmationFindManyArgs);
  }

  @Query(() => PaymentConfirmation, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  paymentConfirmationFindOne(
    @Args('paymentConfirmationFindUniqueArgs')
    paymentConfirmationFindUniqueArgs: PaymentConfirmationFindUniqueArgs,
    @Relations() relations: PaymentConfirmationSelect,
  ) {
    //Auto implement prisma select from graphql query info
    paymentConfirmationFindUniqueArgs.select = relations.select;
    return this.paymentConfirmationService.findOne(paymentConfirmationFindUniqueArgs);
  }

  @Mutation(() => PaymentConfirmation, { description: 'Deskripsinya ada disini loh' })
  paymentConfirmationUpdateOne(
    @Args('paymentConfirmationUpdateOneArgs') paymentConfirmationUpdateOneArgs: PaymentConfirmationUpdateOneArgs,
    @Relations() relations: PaymentConfirmationSelect,
  ) {
    paymentConfirmationUpdateOneArgs.select = relations.select;
    return this.paymentConfirmationService.update(paymentConfirmationUpdateOneArgs);
  }

  @Mutation(() => Boolean, {
    nullable: true,
    description:
      'Datanya benar2 terhapus dari db',
  })
  paymentConfirmationRemove(@Args('paymentConfirmationId') paymentConfirmationId: number) {
    return this.paymentConfirmationService.remove(paymentConfirmationId);
  }
}
