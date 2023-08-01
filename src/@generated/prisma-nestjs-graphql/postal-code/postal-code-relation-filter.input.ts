import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostalCodeWhereInput } from './postal-code-where.input';

@InputType()
export class PostalCodeRelationFilter {

    @Field(() => PostalCodeWhereInput, {nullable:true})
    is?: PostalCodeWhereInput;

    @Field(() => PostalCodeWhereInput, {nullable:true})
    isNot?: PostalCodeWhereInput;
}
