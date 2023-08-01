import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectUpdateWithoutInvestorsInput } from './project-update-without-investors.input';

@InputType()
export class ProjectUpdateWithWhereUniqueWithoutInvestorsInput {

    @Field(() => ProjectWhereUniqueInput, {nullable:false})
    @Type(() => ProjectWhereUniqueInput)
    where!: Prisma.AtLeast<ProjectWhereUniqueInput, 'id' | 'accountId'>;

    @Field(() => ProjectUpdateWithoutInvestorsInput, {nullable:false})
    @Type(() => ProjectUpdateWithoutInvestorsInput)
    data!: ProjectUpdateWithoutInvestorsInput;
}
