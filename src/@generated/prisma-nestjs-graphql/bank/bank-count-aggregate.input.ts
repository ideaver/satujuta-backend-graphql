import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class BankCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    name?: true;

    @Field(() => Boolean, {nullable:true})
    logoUrl?: true;

    @Field(() => Boolean, {nullable:true})
    accountNumber?: true;

    @Field(() => Boolean, {nullable:true})
    accountId?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
