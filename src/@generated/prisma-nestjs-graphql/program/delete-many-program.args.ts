import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProgramWhereInput } from './program-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyProgramArgs {

    @Field(() => ProgramWhereInput, {nullable:true})
    @Type(() => ProgramWhereInput)
    where?: ProgramWhereInput;
}
