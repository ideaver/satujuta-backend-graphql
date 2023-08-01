import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SchoolCreateWithoutStudentsInput } from './school-create-without-students.input';
import { Type } from 'class-transformer';
import { SchoolCreateOrConnectWithoutStudentsInput } from './school-create-or-connect-without-students.input';
import { SchoolUpsertWithoutStudentsInput } from './school-upsert-without-students.input';
import { SchoolWhereInput } from './school-where.input';
import { Prisma } from '@prisma/client';
import { SchoolWhereUniqueInput } from './school-where-unique.input';
import { SchoolUpdateToOneWithWhereWithoutStudentsInput } from './school-update-to-one-with-where-without-students.input';

@InputType()
export class SchoolUpdateOneWithoutStudentsNestedInput {

    @Field(() => SchoolCreateWithoutStudentsInput, {nullable:true})
    @Type(() => SchoolCreateWithoutStudentsInput)
    create?: SchoolCreateWithoutStudentsInput;

    @Field(() => SchoolCreateOrConnectWithoutStudentsInput, {nullable:true})
    @Type(() => SchoolCreateOrConnectWithoutStudentsInput)
    connectOrCreate?: SchoolCreateOrConnectWithoutStudentsInput;

    @Field(() => SchoolUpsertWithoutStudentsInput, {nullable:true})
    @Type(() => SchoolUpsertWithoutStudentsInput)
    upsert?: SchoolUpsertWithoutStudentsInput;

    @Field(() => SchoolWhereInput, {nullable:true})
    @Type(() => SchoolWhereInput)
    disconnect?: SchoolWhereInput;

    @Field(() => SchoolWhereInput, {nullable:true})
    @Type(() => SchoolWhereInput)
    delete?: SchoolWhereInput;

    @Field(() => SchoolWhereUniqueInput, {nullable:true})
    @Type(() => SchoolWhereUniqueInput)
    connect?: Prisma.AtLeast<SchoolWhereUniqueInput, 'id' | 'addressId'>;

    @Field(() => SchoolUpdateToOneWithWhereWithoutStudentsInput, {nullable:true})
    @Type(() => SchoolUpdateToOneWithWhereWithoutStudentsInput)
    update?: SchoolUpdateToOneWithWhereWithoutStudentsInput;
}
