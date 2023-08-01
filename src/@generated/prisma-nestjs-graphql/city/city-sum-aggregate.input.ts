import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CitySumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;
}
