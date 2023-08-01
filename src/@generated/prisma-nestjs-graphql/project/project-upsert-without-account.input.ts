import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectUpdateWithoutAccountInput } from './project-update-without-account.input';
import { Type } from 'class-transformer';
import { ProjectCreateWithoutAccountInput } from './project-create-without-account.input';
import { ProjectWhereInput } from './project-where.input';

@InputType()
export class ProjectUpsertWithoutAccountInput {

    @Field(() => ProjectUpdateWithoutAccountInput, {nullable:false})
    @Type(() => ProjectUpdateWithoutAccountInput)
    update!: ProjectUpdateWithoutAccountInput;

    @Field(() => ProjectCreateWithoutAccountInput, {nullable:false})
    @Type(() => ProjectCreateWithoutAccountInput)
    create!: ProjectCreateWithoutAccountInput;

    @Field(() => ProjectWhereInput, {nullable:true})
    @Type(() => ProjectWhereInput)
    where?: ProjectWhereInput;
}
