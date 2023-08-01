import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProgramScalarWhereInput } from './program-scalar-where.input';
import { Type } from 'class-transformer';
import { ProgramUpdateManyMutationInput } from './program-update-many-mutation.input';

@InputType()
export class ProgramUpdateManyWithWhereWithoutCreatedByInput {

    @Field(() => ProgramScalarWhereInput, {nullable:false})
    @Type(() => ProgramScalarWhereInput)
    where!: ProgramScalarWhereInput;

    @Field(() => ProgramUpdateManyMutationInput, {nullable:false})
    @Type(() => ProgramUpdateManyMutationInput)
    data!: ProgramUpdateManyMutationInput;
}
