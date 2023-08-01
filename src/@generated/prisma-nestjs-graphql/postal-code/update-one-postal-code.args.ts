import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PostalCodeUpdateInput } from './postal-code-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { PostalCodeWhereUniqueInput } from './postal-code-where-unique.input';

@ArgsType()
export class UpdateOnePostalCodeArgs {

    @Field(() => PostalCodeUpdateInput, {nullable:false})
    @Type(() => PostalCodeUpdateInput)
    data!: PostalCodeUpdateInput;

    @Field(() => PostalCodeWhereUniqueInput, {nullable:false})
    @Type(() => PostalCodeWhereUniqueInput)
    where!: Prisma.AtLeast<PostalCodeWhereUniqueInput, 'id' | 'code'>;
}
