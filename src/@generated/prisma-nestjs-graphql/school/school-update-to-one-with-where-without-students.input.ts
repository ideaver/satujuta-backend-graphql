import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SchoolWhereInput } from './school-where.input';
import { Type } from 'class-transformer';
import { SchoolUpdateWithoutStudentsInput } from './school-update-without-students.input';

@InputType()
export class SchoolUpdateToOneWithWhereWithoutStudentsInput {

    @Field(() => SchoolWhereInput, {nullable:true})
    @Type(() => SchoolWhereInput)
    where?: SchoolWhereInput;

    @Field(() => SchoolUpdateWithoutStudentsInput, {nullable:false})
    @Type(() => SchoolUpdateWithoutStudentsInput)
    data!: SchoolUpdateWithoutStudentsInput;
}
