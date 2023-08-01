import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectCreateWithoutAccountInput } from './project-create-without-account.input';

@InputType()
export class ProjectCreateOrConnectWithoutAccountInput {

    @Field(() => ProjectWhereUniqueInput, {nullable:false})
    @Type(() => ProjectWhereUniqueInput)
    where!: Prisma.AtLeast<ProjectWhereUniqueInput, 'id' | 'accountId'>;

    @Field(() => ProjectCreateWithoutAccountInput, {nullable:false})
    @Type(() => ProjectCreateWithoutAccountInput)
    create!: ProjectCreateWithoutAccountInput;
}
