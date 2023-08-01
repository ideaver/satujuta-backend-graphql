import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SchoolCreateManyInput } from './school-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManySchoolArgs {

    @Field(() => [SchoolCreateManyInput], {nullable:false})
    @Type(() => SchoolCreateManyInput)
    data!: Array<SchoolCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
