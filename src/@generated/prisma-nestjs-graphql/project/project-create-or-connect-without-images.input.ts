import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectCreateWithoutImagesInput } from './project-create-without-images.input';

@InputType()
export class ProjectCreateOrConnectWithoutImagesInput {

    @Field(() => ProjectWhereUniqueInput, {nullable:false})
    @Type(() => ProjectWhereUniqueInput)
    where!: Prisma.AtLeast<ProjectWhereUniqueInput, 'id' | 'accountId'>;

    @Field(() => ProjectCreateWithoutImagesInput, {nullable:false})
    @Type(() => ProjectCreateWithoutImagesInput)
    create!: ProjectCreateWithoutImagesInput;
}
