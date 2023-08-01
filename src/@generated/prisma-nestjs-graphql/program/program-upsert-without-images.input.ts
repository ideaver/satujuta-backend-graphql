import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProgramUpdateWithoutImagesInput } from './program-update-without-images.input';
import { Type } from 'class-transformer';
import { ProgramCreateWithoutImagesInput } from './program-create-without-images.input';
import { ProgramWhereInput } from './program-where.input';

@InputType()
export class ProgramUpsertWithoutImagesInput {

    @Field(() => ProgramUpdateWithoutImagesInput, {nullable:false})
    @Type(() => ProgramUpdateWithoutImagesInput)
    update!: ProgramUpdateWithoutImagesInput;

    @Field(() => ProgramCreateWithoutImagesInput, {nullable:false})
    @Type(() => ProgramCreateWithoutImagesInput)
    create!: ProgramCreateWithoutImagesInput;

    @Field(() => ProgramWhereInput, {nullable:true})
    @Type(() => ProgramWhereInput)
    where?: ProgramWhereInput;
}
