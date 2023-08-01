import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectUpdateWithoutInvestorsInput } from './project-update-without-investors.input';
import { ProjectCreateWithoutInvestorsInput } from './project-create-without-investors.input';

@InputType()
export class ProjectUpsertWithWhereUniqueWithoutInvestorsInput {

    @Field(() => ProjectWhereUniqueInput, {nullable:false})
    @Type(() => ProjectWhereUniqueInput)
    where!: Prisma.AtLeast<ProjectWhereUniqueInput, 'id' | 'accountId'>;

    @Field(() => ProjectUpdateWithoutInvestorsInput, {nullable:false})
    @Type(() => ProjectUpdateWithoutInvestorsInput)
    update!: ProjectUpdateWithoutInvestorsInput;

    @Field(() => ProjectCreateWithoutInvestorsInput, {nullable:false})
    @Type(() => ProjectCreateWithoutInvestorsInput)
    create!: ProjectCreateWithoutInvestorsInput;
}
