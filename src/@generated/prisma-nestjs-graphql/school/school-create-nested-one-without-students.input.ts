import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SchoolCreateWithoutStudentsInput } from './school-create-without-students.input';
import { Type } from 'class-transformer';
import { SchoolCreateOrConnectWithoutStudentsInput } from './school-create-or-connect-without-students.input';
import { Prisma } from '@prisma/client';
import { SchoolWhereUniqueInput } from './school-where-unique.input';

@InputType()
export class SchoolCreateNestedOneWithoutStudentsInput {

    @Field(() => SchoolCreateWithoutStudentsInput, {nullable:true})
    @Type(() => SchoolCreateWithoutStudentsInput)
    create?: SchoolCreateWithoutStudentsInput;

    @Field(() => SchoolCreateOrConnectWithoutStudentsInput, {nullable:true})
    @Type(() => SchoolCreateOrConnectWithoutStudentsInput)
    connectOrCreate?: SchoolCreateOrConnectWithoutStudentsInput;

    @Field(() => SchoolWhereUniqueInput, {nullable:true})
    @Type(() => SchoolWhereUniqueInput)
    connect?: Prisma.AtLeast<SchoolWhereUniqueInput, 'id' | 'addressId'>;
}
