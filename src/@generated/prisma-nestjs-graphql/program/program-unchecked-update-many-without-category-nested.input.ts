import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProgramCreateWithoutCategoryInput } from './program-create-without-category.input';
import { Type } from 'class-transformer';
import { ProgramCreateOrConnectWithoutCategoryInput } from './program-create-or-connect-without-category.input';
import { ProgramUpsertWithWhereUniqueWithoutCategoryInput } from './program-upsert-with-where-unique-without-category.input';
import { ProgramCreateManyCategoryInputEnvelope } from './program-create-many-category-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProgramWhereUniqueInput } from './program-where-unique.input';
import { ProgramUpdateWithWhereUniqueWithoutCategoryInput } from './program-update-with-where-unique-without-category.input';
import { ProgramUpdateManyWithWhereWithoutCategoryInput } from './program-update-many-with-where-without-category.input';
import { ProgramScalarWhereInput } from './program-scalar-where.input';

@InputType()
export class ProgramUncheckedUpdateManyWithoutCategoryNestedInput {

    @Field(() => [ProgramCreateWithoutCategoryInput], {nullable:true})
    @Type(() => ProgramCreateWithoutCategoryInput)
    create?: Array<ProgramCreateWithoutCategoryInput>;

    @Field(() => [ProgramCreateOrConnectWithoutCategoryInput], {nullable:true})
    @Type(() => ProgramCreateOrConnectWithoutCategoryInput)
    connectOrCreate?: Array<ProgramCreateOrConnectWithoutCategoryInput>;

    @Field(() => [ProgramUpsertWithWhereUniqueWithoutCategoryInput], {nullable:true})
    @Type(() => ProgramUpsertWithWhereUniqueWithoutCategoryInput)
    upsert?: Array<ProgramUpsertWithWhereUniqueWithoutCategoryInput>;

    @Field(() => ProgramCreateManyCategoryInputEnvelope, {nullable:true})
    @Type(() => ProgramCreateManyCategoryInputEnvelope)
    createMany?: ProgramCreateManyCategoryInputEnvelope;

    @Field(() => [ProgramWhereUniqueInput], {nullable:true})
    @Type(() => ProgramWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ProgramWhereUniqueInput, 'id' | 'createdById'>>;

    @Field(() => [ProgramWhereUniqueInput], {nullable:true})
    @Type(() => ProgramWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ProgramWhereUniqueInput, 'id' | 'createdById'>>;

    @Field(() => [ProgramWhereUniqueInput], {nullable:true})
    @Type(() => ProgramWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ProgramWhereUniqueInput, 'id' | 'createdById'>>;

    @Field(() => [ProgramWhereUniqueInput], {nullable:true})
    @Type(() => ProgramWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProgramWhereUniqueInput, 'id' | 'createdById'>>;

    @Field(() => [ProgramUpdateWithWhereUniqueWithoutCategoryInput], {nullable:true})
    @Type(() => ProgramUpdateWithWhereUniqueWithoutCategoryInput)
    update?: Array<ProgramUpdateWithWhereUniqueWithoutCategoryInput>;

    @Field(() => [ProgramUpdateManyWithWhereWithoutCategoryInput], {nullable:true})
    @Type(() => ProgramUpdateManyWithWhereWithoutCategoryInput)
    updateMany?: Array<ProgramUpdateManyWithWhereWithoutCategoryInput>;

    @Field(() => [ProgramScalarWhereInput], {nullable:true})
    @Type(() => ProgramScalarWhereInput)
    deleteMany?: Array<ProgramScalarWhereInput>;
}
