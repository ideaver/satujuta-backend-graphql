import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateWithoutAccountInput } from './project-create-without-account.input';
import { Type } from 'class-transformer';
import { ProjectCreateOrConnectWithoutAccountInput } from './project-create-or-connect-without-account.input';
import { ProjectUpsertWithoutAccountInput } from './project-upsert-without-account.input';
import { ProjectWhereInput } from './project-where.input';
import { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { ProjectUpdateToOneWithWhereWithoutAccountInput } from './project-update-to-one-with-where-without-account.input';

@InputType()
export class ProjectUpdateOneWithoutAccountNestedInput {

    @Field(() => ProjectCreateWithoutAccountInput, {nullable:true})
    @Type(() => ProjectCreateWithoutAccountInput)
    create?: ProjectCreateWithoutAccountInput;

    @Field(() => ProjectCreateOrConnectWithoutAccountInput, {nullable:true})
    @Type(() => ProjectCreateOrConnectWithoutAccountInput)
    connectOrCreate?: ProjectCreateOrConnectWithoutAccountInput;

    @Field(() => ProjectUpsertWithoutAccountInput, {nullable:true})
    @Type(() => ProjectUpsertWithoutAccountInput)
    upsert?: ProjectUpsertWithoutAccountInput;

    @Field(() => ProjectWhereInput, {nullable:true})
    @Type(() => ProjectWhereInput)
    disconnect?: ProjectWhereInput;

    @Field(() => ProjectWhereInput, {nullable:true})
    @Type(() => ProjectWhereInput)
    delete?: ProjectWhereInput;

    @Field(() => ProjectWhereUniqueInput, {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    connect?: Prisma.AtLeast<ProjectWhereUniqueInput, 'id' | 'accountId'>;

    @Field(() => ProjectUpdateToOneWithWhereWithoutAccountInput, {nullable:true})
    @Type(() => ProjectUpdateToOneWithWhereWithoutAccountInput)
    update?: ProjectUpdateToOneWithWhereWithoutAccountInput;
}
