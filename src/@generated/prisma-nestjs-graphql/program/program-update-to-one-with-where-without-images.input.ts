import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProgramWhereInput } from './program-where.input';
import { Type } from 'class-transformer';
import { ProgramUpdateWithoutImagesInput } from './program-update-without-images.input';

@InputType()
export class ProgramUpdateToOneWithWhereWithoutImagesInput {

    @Field(() => ProgramWhereInput, {nullable:true})
    @Type(() => ProgramWhereInput)
    where?: ProgramWhereInput;

    @Field(() => ProgramUpdateWithoutImagesInput, {nullable:false})
    @Type(() => ProgramUpdateWithoutImagesInput)
    data!: ProgramUpdateWithoutImagesInput;
}
