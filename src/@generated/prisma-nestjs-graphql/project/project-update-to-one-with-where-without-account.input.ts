import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectWhereInput } from './project-where.input';
import { Type } from 'class-transformer';
import { ProjectUpdateWithoutAccountInput } from './project-update-without-account.input';

@InputType()
export class ProjectUpdateToOneWithWhereWithoutAccountInput {

    @Field(() => ProjectWhereInput, {nullable:true})
    @Type(() => ProjectWhereInput)
    where?: ProjectWhereInput;

    @Field(() => ProjectUpdateWithoutAccountInput, {nullable:false})
    @Type(() => ProjectUpdateWithoutAccountInput)
    data!: ProjectUpdateWithoutAccountInput;
}
