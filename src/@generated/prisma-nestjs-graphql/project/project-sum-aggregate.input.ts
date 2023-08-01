import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ProjectSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    returnRate?: true;

    @Field(() => Boolean, {nullable:true})
    goalAmount?: true;

    @Field(() => Boolean, {nullable:true})
    currentAmount?: true;

    @Field(() => Boolean, {nullable:true})
    minimumInvestment?: true;

    @Field(() => Boolean, {nullable:true})
    maxInvestor?: true;

    @Field(() => Boolean, {nullable:true})
    accountId?: true;
}
