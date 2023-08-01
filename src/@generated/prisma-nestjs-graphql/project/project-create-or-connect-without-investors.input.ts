import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectCreateWithoutInvestorsInput } from './project-create-without-investors.input';

@InputType()
export class ProjectCreateOrConnectWithoutInvestorsInput {

    @Field(() => ProjectWhereUniqueInput, {nullable:false})
    @Type(() => ProjectWhereUniqueInput)
    where!: Prisma.AtLeast<ProjectWhereUniqueInput, 'id' | 'accountId'>;

    @Field(() => ProjectCreateWithoutInvestorsInput, {nullable:false})
    @Type(() => ProjectCreateWithoutInvestorsInput)
    create!: ProjectCreateWithoutInvestorsInput;
}
