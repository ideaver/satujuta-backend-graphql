import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateWithoutInvestorsInput } from './project-create-without-investors.input';
import { Type } from 'class-transformer';
import { ProjectCreateOrConnectWithoutInvestorsInput } from './project-create-or-connect-without-investors.input';
import { ProjectUpsertWithWhereUniqueWithoutInvestorsInput } from './project-upsert-with-where-unique-without-investors.input';
import { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { ProjectUpdateWithWhereUniqueWithoutInvestorsInput } from './project-update-with-where-unique-without-investors.input';
import { ProjectUpdateManyWithWhereWithoutInvestorsInput } from './project-update-many-with-where-without-investors.input';
import { ProjectScalarWhereInput } from './project-scalar-where.input';

@InputType()
export class ProjectUncheckedUpdateManyWithoutInvestorsNestedInput {

    @Field(() => [ProjectCreateWithoutInvestorsInput], {nullable:true})
    @Type(() => ProjectCreateWithoutInvestorsInput)
    create?: Array<ProjectCreateWithoutInvestorsInput>;

    @Field(() => [ProjectCreateOrConnectWithoutInvestorsInput], {nullable:true})
    @Type(() => ProjectCreateOrConnectWithoutInvestorsInput)
    connectOrCreate?: Array<ProjectCreateOrConnectWithoutInvestorsInput>;

    @Field(() => [ProjectUpsertWithWhereUniqueWithoutInvestorsInput], {nullable:true})
    @Type(() => ProjectUpsertWithWhereUniqueWithoutInvestorsInput)
    upsert?: Array<ProjectUpsertWithWhereUniqueWithoutInvestorsInput>;

    @Field(() => [ProjectWhereUniqueInput], {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ProjectWhereUniqueInput, 'id' | 'accountId'>>;

    @Field(() => [ProjectWhereUniqueInput], {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ProjectWhereUniqueInput, 'id' | 'accountId'>>;

    @Field(() => [ProjectWhereUniqueInput], {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ProjectWhereUniqueInput, 'id' | 'accountId'>>;

    @Field(() => [ProjectWhereUniqueInput], {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProjectWhereUniqueInput, 'id' | 'accountId'>>;

    @Field(() => [ProjectUpdateWithWhereUniqueWithoutInvestorsInput], {nullable:true})
    @Type(() => ProjectUpdateWithWhereUniqueWithoutInvestorsInput)
    update?: Array<ProjectUpdateWithWhereUniqueWithoutInvestorsInput>;

    @Field(() => [ProjectUpdateManyWithWhereWithoutInvestorsInput], {nullable:true})
    @Type(() => ProjectUpdateManyWithWhereWithoutInvestorsInput)
    updateMany?: Array<ProjectUpdateManyWithWhereWithoutInvestorsInput>;

    @Field(() => [ProjectScalarWhereInput], {nullable:true})
    @Type(() => ProjectScalarWhereInput)
    deleteMany?: Array<ProjectScalarWhereInput>;
}
