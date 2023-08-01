import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SchoolCreateInput } from './school-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneSchoolArgs {

    @Field(() => SchoolCreateInput, {nullable:false})
    @Type(() => SchoolCreateInput)
    data!: SchoolCreateInput;
}
