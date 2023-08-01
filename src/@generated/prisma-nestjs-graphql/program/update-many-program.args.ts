import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProgramUpdateManyMutationInput } from './program-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ProgramWhereInput } from './program-where.input';

@ArgsType()
export class UpdateManyProgramArgs {

    @Field(() => ProgramUpdateManyMutationInput, {nullable:false})
    @Type(() => ProgramUpdateManyMutationInput)
    data!: ProgramUpdateManyMutationInput;

    @Field(() => ProgramWhereInput, {nullable:true})
    @Type(() => ProgramWhereInput)
    where?: ProgramWhereInput;
}
