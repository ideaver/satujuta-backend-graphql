import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PostalCodeWhereInput } from './postal-code-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyPostalCodeArgs {

    @Field(() => PostalCodeWhereInput, {nullable:true})
    @Type(() => PostalCodeWhereInput)
    where?: PostalCodeWhereInput;
}
