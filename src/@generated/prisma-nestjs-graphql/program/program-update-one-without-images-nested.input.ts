import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProgramCreateWithoutImagesInput } from './program-create-without-images.input';
import { Type } from 'class-transformer';
import { ProgramCreateOrConnectWithoutImagesInput } from './program-create-or-connect-without-images.input';
import { ProgramUpsertWithoutImagesInput } from './program-upsert-without-images.input';
import { ProgramWhereInput } from './program-where.input';
import { Prisma } from '@prisma/client';
import { ProgramWhereUniqueInput } from './program-where-unique.input';
import { ProgramUpdateToOneWithWhereWithoutImagesInput } from './program-update-to-one-with-where-without-images.input';

@InputType()
export class ProgramUpdateOneWithoutImagesNestedInput {

    @Field(() => ProgramCreateWithoutImagesInput, {nullable:true})
    @Type(() => ProgramCreateWithoutImagesInput)
    create?: ProgramCreateWithoutImagesInput;

    @Field(() => ProgramCreateOrConnectWithoutImagesInput, {nullable:true})
    @Type(() => ProgramCreateOrConnectWithoutImagesInput)
    connectOrCreate?: ProgramCreateOrConnectWithoutImagesInput;

    @Field(() => ProgramUpsertWithoutImagesInput, {nullable:true})
    @Type(() => ProgramUpsertWithoutImagesInput)
    upsert?: ProgramUpsertWithoutImagesInput;

    @Field(() => ProgramWhereInput, {nullable:true})
    @Type(() => ProgramWhereInput)
    disconnect?: ProgramWhereInput;

    @Field(() => ProgramWhereInput, {nullable:true})
    @Type(() => ProgramWhereInput)
    delete?: ProgramWhereInput;

    @Field(() => ProgramWhereUniqueInput, {nullable:true})
    @Type(() => ProgramWhereUniqueInput)
    connect?: Prisma.AtLeast<ProgramWhereUniqueInput, 'id' | 'createdById'>;

    @Field(() => ProgramUpdateToOneWithWhereWithoutImagesInput, {nullable:true})
    @Type(() => ProgramUpdateToOneWithWhereWithoutImagesInput)
    update?: ProgramUpdateToOneWithWhereWithoutImagesInput;
}
