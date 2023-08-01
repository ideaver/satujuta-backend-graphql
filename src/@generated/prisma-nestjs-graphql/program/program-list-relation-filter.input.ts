import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProgramWhereInput } from './program-where.input';

@InputType()
export class ProgramListRelationFilter {

    @Field(() => ProgramWhereInput, {nullable:true})
    every?: ProgramWhereInput;

    @Field(() => ProgramWhereInput, {nullable:true})
    some?: ProgramWhereInput;

    @Field(() => ProgramWhereInput, {nullable:true})
    none?: ProgramWhereInput;
}
