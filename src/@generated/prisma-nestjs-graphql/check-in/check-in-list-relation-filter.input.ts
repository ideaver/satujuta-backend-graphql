import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CheckInWhereInput } from './check-in-where.input';

@InputType()
export class CheckInListRelationFilter {

    @Field(() => CheckInWhereInput, {nullable:true})
    every?: CheckInWhereInput;

    @Field(() => CheckInWhereInput, {nullable:true})
    some?: CheckInWhereInput;

    @Field(() => CheckInWhereInput, {nullable:true})
    none?: CheckInWhereInput;
}
