import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PostalCodeWhereUniqueInput } from './postal-code-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquePostalCodeArgs {

    @Field(() => PostalCodeWhereUniqueInput, {nullable:false})
    @Type(() => PostalCodeWhereUniqueInput)
    where!: Prisma.AtLeast<PostalCodeWhereUniqueInput, 'id' | 'code'>;
}
