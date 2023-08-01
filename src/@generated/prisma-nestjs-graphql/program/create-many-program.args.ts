import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProgramCreateManyInput } from './program-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyProgramArgs {

    @Field(() => [ProgramCreateManyInput], {nullable:false})
    @Type(() => ProgramCreateManyInput)
    data!: Array<ProgramCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
