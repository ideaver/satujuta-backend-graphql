import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProgramCreateInput } from './program-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneProgramArgs {

    @Field(() => ProgramCreateInput, {nullable:false})
    @Type(() => ProgramCreateInput)
    data!: ProgramCreateInput;
}
