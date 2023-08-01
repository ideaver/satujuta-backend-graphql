import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProgramCreateWithoutImagesInput } from './program-create-without-images.input';
import { Type } from 'class-transformer';
import { ProgramCreateOrConnectWithoutImagesInput } from './program-create-or-connect-without-images.input';
import { Prisma } from '@prisma/client';
import { ProgramWhereUniqueInput } from './program-where-unique.input';

@InputType()
export class ProgramCreateNestedOneWithoutImagesInput {

    @Field(() => ProgramCreateWithoutImagesInput, {nullable:true})
    @Type(() => ProgramCreateWithoutImagesInput)
    create?: ProgramCreateWithoutImagesInput;

    @Field(() => ProgramCreateOrConnectWithoutImagesInput, {nullable:true})
    @Type(() => ProgramCreateOrConnectWithoutImagesInput)
    connectOrCreate?: ProgramCreateOrConnectWithoutImagesInput;

    @Field(() => ProgramWhereUniqueInput, {nullable:true})
    @Type(() => ProgramWhereUniqueInput)
    connect?: Prisma.AtLeast<ProgramWhereUniqueInput, 'id' | 'createdById'>;
}
