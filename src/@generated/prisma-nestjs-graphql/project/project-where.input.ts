import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumProjectCategoryFilter } from '../prisma/enum-project-category-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { ImagesListRelationFilter } from '../images/images-list-relation-filter.input';
import { UserListRelationFilter } from '../user/user-list-relation-filter.input';
import { AccountRelationFilter } from '../account/account-relation-filter.input';

@InputType()
export class ProjectWhereInput {

    @Field(() => [ProjectWhereInput], {nullable:true})
    AND?: Array<ProjectWhereInput>;

    @Field(() => [ProjectWhereInput], {nullable:true})
    OR?: Array<ProjectWhereInput>;

    @Field(() => [ProjectWhereInput], {nullable:true})
    NOT?: Array<ProjectWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => EnumProjectCategoryFilter, {nullable:true})
    projectCategory?: EnumProjectCategoryFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    startDate?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    endDate?: DateTimeFilter;

    @Field(() => FloatFilter, {nullable:true})
    returnRate?: FloatFilter;

    @Field(() => IntFilter, {nullable:true})
    goalAmount?: IntFilter;

    @Field(() => FloatFilter, {nullable:true})
    currentAmount?: FloatFilter;

    @Field(() => IntFilter, {nullable:true})
    minimumInvestment?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    maxInvestor?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    accountId?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => ImagesListRelationFilter, {nullable:true})
    images?: ImagesListRelationFilter;

    @Field(() => UserListRelationFilter, {nullable:true})
    investors?: UserListRelationFilter;

    @Field(() => AccountRelationFilter, {nullable:true})
    account?: AccountRelationFilter;
}
