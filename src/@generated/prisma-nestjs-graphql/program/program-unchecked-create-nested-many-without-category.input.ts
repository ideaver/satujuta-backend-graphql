import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProgramCreateWithoutCategoryInput } from './program-create-without-category.input';
import { Type } from 'class-transformer';
import { ProgramCreateOrConnectWithoutCategoryInput } from './program-create-or-connect-without-category.input';
import { ProgramCreateManyCategoryInputEnvelope } from './program-create-many-category-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProgramWhereUniqueInput } from './program-where-unique.input';

@InputType()
export class ProgramUncheckedCreateNestedManyWithoutCategoryInput {

    @Field(() => [ProgramCreateWithoutCategoryInput], {nullable:true})
    @Type(() => ProgramCreateWithoutCategoryInput)
    create?: Array<ProgramCreateWithoutCategoryInput>;

    @Field(() => [ProgramCreateOrConnectWithoutCategoryInput], {nullable:true})
    @Type(() => ProgramCreateOrConnectWithoutCategoryInput)
    connectOrCreate?: Array<ProgramCreateOrConnectWithoutCategoryInput>;

    @Field(() => ProgramCreateManyCategoryInputEnvelope, {nullable:true})
    @Type(() => ProgramCreateManyCategoryInputEnvelope)
    createMany?: ProgramCreateManyCategoryInputEnvelope;

    @Field(() => [ProgramWhereUniqueInput], {nullable:true})
    @Type(() => ProgramWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProgramWhereUniqueInput, 'id' | 'createdById'>>;
}
