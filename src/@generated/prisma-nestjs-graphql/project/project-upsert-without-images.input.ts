import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectUpdateWithoutImagesInput } from './project-update-without-images.input';
import { Type } from 'class-transformer';
import { ProjectCreateWithoutImagesInput } from './project-create-without-images.input';
import { ProjectWhereInput } from './project-where.input';

@InputType()
export class ProjectUpsertWithoutImagesInput {

    @Field(() => ProjectUpdateWithoutImagesInput, {nullable:false})
    @Type(() => ProjectUpdateWithoutImagesInput)
    update!: ProjectUpdateWithoutImagesInput;

    @Field(() => ProjectCreateWithoutImagesInput, {nullable:false})
    @Type(() => ProjectCreateWithoutImagesInput)
    create!: ProjectCreateWithoutImagesInput;

    @Field(() => ProjectWhereInput, {nullable:true})
    @Type(() => ProjectWhereInput)
    where?: ProjectWhereInput;
}
