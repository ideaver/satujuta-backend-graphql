import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProgramCategoryWhereInput } from './program-category-where.input';
import { Type } from 'class-transformer';
import { ProgramCategoryOrderByWithRelationInput } from './program-category-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ProgramCategoryWhereUniqueInput } from './program-category-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ProgramCategoryScalarFieldEnum } from './program-category-scalar-field.enum';

@ArgsType()
export class FindFirstProgramCategoryOrThrowArgs {

    @Field(() => ProgramCategoryWhereInput, {nullable:true})
    @Type(() => ProgramCategoryWhereInput)
    where?: ProgramCategoryWhereInput;

    @Field(() => [ProgramCategoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProgramCategoryOrderByWithRelationInput>;

    @Field(() => ProgramCategoryWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ProgramCategoryWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ProgramCategoryScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ProgramCategoryScalarFieldEnum>;
}
