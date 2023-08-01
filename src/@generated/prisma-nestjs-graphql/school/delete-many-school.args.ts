import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SchoolWhereInput } from './school-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManySchoolArgs {

    @Field(() => SchoolWhereInput, {nullable:true})
    @Type(() => SchoolWhereInput)
    where?: SchoolWhereInput;
}
