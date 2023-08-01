import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateWithoutImagesInput } from './project-create-without-images.input';
import { Type } from 'class-transformer';
import { ProjectCreateOrConnectWithoutImagesInput } from './project-create-or-connect-without-images.input';
import { ProjectUpsertWithoutImagesInput } from './project-upsert-without-images.input';
import { ProjectWhereInput } from './project-where.input';
import { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { ProjectUpdateToOneWithWhereWithoutImagesInput } from './project-update-to-one-with-where-without-images.input';

@InputType()
export class ProjectUpdateOneWithoutImagesNestedInput {

    @Field(() => ProjectCreateWithoutImagesInput, {nullable:true})
    @Type(() => ProjectCreateWithoutImagesInput)
    create?: ProjectCreateWithoutImagesInput;

    @Field(() => ProjectCreateOrConnectWithoutImagesInput, {nullable:true})
    @Type(() => ProjectCreateOrConnectWithoutImagesInput)
    connectOrCreate?: ProjectCreateOrConnectWithoutImagesInput;

    @Field(() => ProjectUpsertWithoutImagesInput, {nullable:true})
    @Type(() => ProjectUpsertWithoutImagesInput)
    upsert?: ProjectUpsertWithoutImagesInput;

    @Field(() => ProjectWhereInput, {nullable:true})
    @Type(() => ProjectWhereInput)
    disconnect?: ProjectWhereInput;

    @Field(() => ProjectWhereInput, {nullable:true})
    @Type(() => ProjectWhereInput)
    delete?: ProjectWhereInput;

    @Field(() => ProjectWhereUniqueInput, {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    connect?: Prisma.AtLeast<ProjectWhereUniqueInput, 'id' | 'accountId'>;

    @Field(() => ProjectUpdateToOneWithWhereWithoutImagesInput, {nullable:true})
    @Type(() => ProjectUpdateToOneWithWhereWithoutImagesInput)
    update?: ProjectUpdateToOneWithWhereWithoutImagesInput;
}
