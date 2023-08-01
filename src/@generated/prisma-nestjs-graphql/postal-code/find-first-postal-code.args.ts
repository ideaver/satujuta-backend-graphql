import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PostalCodeWhereInput } from './postal-code-where.input';
import { Type } from 'class-transformer';
import { PostalCodeOrderByWithRelationInput } from './postal-code-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PostalCodeWhereUniqueInput } from './postal-code-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PostalCodeScalarFieldEnum } from './postal-code-scalar-field.enum';

@ArgsType()
export class FindFirstPostalCodeArgs {

    @Field(() => PostalCodeWhereInput, {nullable:true})
    @Type(() => PostalCodeWhereInput)
    where?: PostalCodeWhereInput;

    @Field(() => [PostalCodeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PostalCodeOrderByWithRelationInput>;

    @Field(() => PostalCodeWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PostalCodeWhereUniqueInput, 'id' | 'code'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [PostalCodeScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PostalCodeScalarFieldEnum>;
}
