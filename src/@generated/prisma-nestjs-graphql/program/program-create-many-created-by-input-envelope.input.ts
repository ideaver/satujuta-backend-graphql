import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProgramCreateManyCreatedByInput } from './program-create-many-created-by.input';
import { Type } from 'class-transformer';

@InputType()
export class ProgramCreateManyCreatedByInputEnvelope {

    @Field(() => [ProgramCreateManyCreatedByInput], {nullable:false})
    @Type(() => ProgramCreateManyCreatedByInput)
    data!: Array<ProgramCreateManyCreatedByInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
