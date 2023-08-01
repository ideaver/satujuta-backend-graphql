import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SchoolUpdateManyMutationInput } from './school-update-many-mutation.input';
import { Type } from 'class-transformer';
import { SchoolWhereInput } from './school-where.input';

@ArgsType()
export class UpdateManySchoolArgs {

    @Field(() => SchoolUpdateManyMutationInput, {nullable:false})
    @Type(() => SchoolUpdateManyMutationInput)
    data!: SchoolUpdateManyMutationInput;

    @Field(() => SchoolWhereInput, {nullable:true})
    @Type(() => SchoolWhereInput)
    where?: SchoolWhereInput;
}
