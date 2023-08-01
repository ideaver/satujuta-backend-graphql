import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProgramWhereUniqueInput } from './program-where-unique.input';
import { Type } from 'class-transformer';
import { ProgramCreateWithoutImagesInput } from './program-create-without-images.input';

@InputType()
export class ProgramCreateOrConnectWithoutImagesInput {

    @Field(() => ProgramWhereUniqueInput, {nullable:false})
    @Type(() => ProgramWhereUniqueInput)
    where!: Prisma.AtLeast<ProgramWhereUniqueInput, 'id' | 'createdById'>;

    @Field(() => ProgramCreateWithoutImagesInput, {nullable:false})
    @Type(() => ProgramCreateWithoutImagesInput)
    create!: ProgramCreateWithoutImagesInput;
}
