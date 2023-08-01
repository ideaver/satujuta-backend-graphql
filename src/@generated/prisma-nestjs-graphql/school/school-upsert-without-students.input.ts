import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SchoolUpdateWithoutStudentsInput } from './school-update-without-students.input';
import { Type } from 'class-transformer';
import { SchoolCreateWithoutStudentsInput } from './school-create-without-students.input';
import { SchoolWhereInput } from './school-where.input';

@InputType()
export class SchoolUpsertWithoutStudentsInput {

    @Field(() => SchoolUpdateWithoutStudentsInput, {nullable:false})
    @Type(() => SchoolUpdateWithoutStudentsInput)
    update!: SchoolUpdateWithoutStudentsInput;

    @Field(() => SchoolCreateWithoutStudentsInput, {nullable:false})
    @Type(() => SchoolCreateWithoutStudentsInput)
    create!: SchoolCreateWithoutStudentsInput;

    @Field(() => SchoolWhereInput, {nullable:true})
    @Type(() => SchoolWhereInput)
    where?: SchoolWhereInput;
}
