import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PostalCodeWhereUniqueInput } from './postal-code-where-unique.input';
import { Type } from 'class-transformer';
import { PostalCodeCreateInput } from './postal-code-create.input';
import { PostalCodeUpdateInput } from './postal-code-update.input';

@ArgsType()
export class UpsertOnePostalCodeArgs {

    @Field(() => PostalCodeWhereUniqueInput, {nullable:false})
    @Type(() => PostalCodeWhereUniqueInput)
    where!: Prisma.AtLeast<PostalCodeWhereUniqueInput, 'id' | 'code'>;

    @Field(() => PostalCodeCreateInput, {nullable:false})
    @Type(() => PostalCodeCreateInput)
    create!: PostalCodeCreateInput;

    @Field(() => PostalCodeUpdateInput, {nullable:false})
    @Type(() => PostalCodeUpdateInput)
    update!: PostalCodeUpdateInput;
}
