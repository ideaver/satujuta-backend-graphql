import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateWithoutInvestorsInput } from './project-create-without-investors.input';
import { Type } from 'class-transformer';
import { ProjectCreateOrConnectWithoutInvestorsInput } from './project-create-or-connect-without-investors.input';
import { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInput } from './project-where-unique.input';

@InputType()
export class ProjectUncheckedCreateNestedManyWithoutInvestorsInput {

    @Field(() => [ProjectCreateWithoutInvestorsInput], {nullable:true})
    @Type(() => ProjectCreateWithoutInvestorsInput)
    create?: Array<ProjectCreateWithoutInvestorsInput>;

    @Field(() => [ProjectCreateOrConnectWithoutInvestorsInput], {nullable:true})
    @Type(() => ProjectCreateOrConnectWithoutInvestorsInput)
    connectOrCreate?: Array<ProjectCreateOrConnectWithoutInvestorsInput>;

    @Field(() => [ProjectWhereUniqueInput], {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProjectWhereUniqueInput, 'id' | 'accountId'>>;
}
