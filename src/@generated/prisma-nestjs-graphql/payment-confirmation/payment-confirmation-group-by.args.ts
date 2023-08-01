import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PaymentConfirmationWhereInput } from './payment-confirmation-where.input';
import { Type } from 'class-transformer';
import { PaymentConfirmationOrderByWithAggregationInput } from './payment-confirmation-order-by-with-aggregation.input';
import { PaymentConfirmationScalarFieldEnum } from './payment-confirmation-scalar-field.enum';
import { PaymentConfirmationScalarWhereWithAggregatesInput } from './payment-confirmation-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { PaymentConfirmationCountAggregateInput } from './payment-confirmation-count-aggregate.input';
import { PaymentConfirmationAvgAggregateInput } from './payment-confirmation-avg-aggregate.input';
import { PaymentConfirmationSumAggregateInput } from './payment-confirmation-sum-aggregate.input';
import { PaymentConfirmationMinAggregateInput } from './payment-confirmation-min-aggregate.input';
import { PaymentConfirmationMaxAggregateInput } from './payment-confirmation-max-aggregate.input';

@ArgsType()
export class PaymentConfirmationGroupByArgs {

    @Field(() => PaymentConfirmationWhereInput, {nullable:true})
    @Type(() => PaymentConfirmationWhereInput)
    where?: PaymentConfirmationWhereInput;

    @Field(() => [PaymentConfirmationOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PaymentConfirmationOrderByWithAggregationInput>;

    @Field(() => [PaymentConfirmationScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof PaymentConfirmationScalarFieldEnum>;

    @Field(() => PaymentConfirmationScalarWhereWithAggregatesInput, {nullable:true})
    having?: PaymentConfirmationScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PaymentConfirmationCountAggregateInput, {nullable:true})
    _count?: PaymentConfirmationCountAggregateInput;

    @Field(() => PaymentConfirmationAvgAggregateInput, {nullable:true})
    _avg?: PaymentConfirmationAvgAggregateInput;

    @Field(() => PaymentConfirmationSumAggregateInput, {nullable:true})
    _sum?: PaymentConfirmationSumAggregateInput;

    @Field(() => PaymentConfirmationMinAggregateInput, {nullable:true})
    _min?: PaymentConfirmationMinAggregateInput;

    @Field(() => PaymentConfirmationMaxAggregateInput, {nullable:true})
    _max?: PaymentConfirmationMaxAggregateInput;
}
