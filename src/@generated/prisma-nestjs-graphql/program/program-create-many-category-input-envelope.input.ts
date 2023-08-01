import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProgramCreateManyCategoryInput } from './program-create-many-category.input';
import { Type } from 'class-transformer';

@InputType()
export class ProgramCreateManyCategoryInputEnvelope {

    @Field(() => [ProgramCreateManyCategoryInput], {nullable:false})
    @Type(() => ProgramCreateManyCategoryInput)
    data!: Array<ProgramCreateManyCategoryInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
