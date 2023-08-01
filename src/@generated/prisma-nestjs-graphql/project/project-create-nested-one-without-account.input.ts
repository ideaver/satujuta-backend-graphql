import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateWithoutAccountInput } from './project-create-without-account.input';
import { Type } from 'class-transformer';
import { ProjectCreateOrConnectWithoutAccountInput } from './project-create-or-connect-without-account.input';
import { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInput } from './project-where-unique.input';

@InputType()
export class ProjectCreateNestedOneWithoutAccountInput {

    @Field(() => ProjectCreateWithoutAccountInput, {nullable:true})
    @Type(() => ProjectCreateWithoutAccountInput)
    create?: ProjectCreateWithoutAccountInput;

    @Field(() => ProjectCreateOrConnectWithoutAccountInput, {nullable:true})
    @Type(() => ProjectCreateOrConnectWithoutAccountInput)
    connectOrCreate?: ProjectCreateOrConnectWithoutAccountInput;

    @Field(() => ProjectWhereUniqueInput, {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    connect?: Prisma.AtLeast<ProjectWhereUniqueInput, 'id' | 'accountId'>;
}
