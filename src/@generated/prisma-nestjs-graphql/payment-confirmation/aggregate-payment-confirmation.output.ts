import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PaymentConfirmationCountAggregate } from './payment-confirmation-count-aggregate.output';
import { PaymentConfirmationAvgAggregate } from './payment-confirmation-avg-aggregate.output';
import { PaymentConfirmationSumAggregate } from './payment-confirmation-sum-aggregate.output';
import { PaymentConfirmationMinAggregate } from './payment-confirmation-min-aggregate.output';
import { PaymentConfirmationMaxAggregate } from './payment-confirmation-max-aggregate.output';

@ObjectType()
export class AggregatePaymentConfirmation {

    @Field(() => PaymentConfirmationCountAggregate, {nullable:true})
    _count?: PaymentConfirmationCountAggregate;

    @Field(() => PaymentConfirmationAvgAggregate, {nullable:true})
    _avg?: PaymentConfirmationAvgAggregate;

    @Field(() => PaymentConfirmationSumAggregate, {nullable:true})
    _sum?: PaymentConfirmationSumAggregate;

    @Field(() => PaymentConfirmationMinAggregate, {nullable:true})
    _min?: PaymentConfirmationMinAggregate;

    @Field(() => PaymentConfirmationMaxAggregate, {nullable:true})
    _max?: PaymentConfirmationMaxAggregate;
}
