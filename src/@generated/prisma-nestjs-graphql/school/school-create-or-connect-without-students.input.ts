import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SchoolWhereUniqueInput } from './school-where-unique.input';
import { Type } from 'class-transformer';
import { SchoolCreateWithoutStudentsInput } from './school-create-without-students.input';

@InputType()
export class SchoolCreateOrConnectWithoutStudentsInput {

    @Field(() => SchoolWhereUniqueInput, {nullable:false})
    @Type(() => SchoolWhereUniqueInput)
    where!: Prisma.AtLeast<SchoolWhereUniqueInput, 'id' | 'addressId'>;

    @Field(() => SchoolCreateWithoutStudentsInput, {nullable:false})
    @Type(() => SchoolCreateWithoutStudentsInput)
    create!: SchoolCreateWithoutStudentsInput;
}
