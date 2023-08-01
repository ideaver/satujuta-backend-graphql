import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectWhereInput } from './project-where.input';
import { Type } from 'class-transformer';
import { ProjectUpdateWithoutImagesInput } from './project-update-without-images.input';

@InputType()
export class ProjectUpdateToOneWithWhereWithoutImagesInput {

    @Field(() => ProjectWhereInput, {nullable:true})
    @Type(() => ProjectWhereInput)
    where?: ProjectWhereInput;

    @Field(() => ProjectUpdateWithoutImagesInput, {nullable:false})
    @Type(() => ProjectUpdateWithoutImagesInput)
    data!: ProjectUpdateWithoutImagesInput;
}
