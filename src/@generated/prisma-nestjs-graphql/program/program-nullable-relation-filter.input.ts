import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProgramWhereInput } from './program-where.input';

@InputType()
export class ProgramNullableRelationFilter {

    @Field(() => ProgramWhereInput, {nullable:true})
    is?: ProgramWhereInput;

    @Field(() => ProgramWhereInput, {nullable:true})
    isNot?: ProgramWhereInput;
}
