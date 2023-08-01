import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateWithoutImagesInput } from './project-create-without-images.input';
import { Type } from 'class-transformer';
import { ProjectCreateOrConnectWithoutImagesInput } from './project-create-or-connect-without-images.input';
import { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInput } from './project-where-unique.input';

@InputType()
export class ProjectCreateNestedOneWithoutImagesInput {

    @Field(() => ProjectCreateWithoutImagesInput, {nullable:true})
    @Type(() => ProjectCreateWithoutImagesInput)
    create?: ProjectCreateWithoutImagesInput;

    @Field(() => ProjectCreateOrConnectWithoutImagesInput, {nullable:true})
    @Type(() => ProjectCreateOrConnectWithoutImagesInput)
    connectOrCreate?: ProjectCreateOrConnectWithoutImagesInput;

    @Field(() => ProjectWhereUniqueInput, {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    connect?: Prisma.AtLeast<ProjectWhereUniqueInput, 'id' | 'accountId'>;
}
