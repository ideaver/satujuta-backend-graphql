import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { SessionWhereInput } from './session-where.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';

@InputType()
export class SessionWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    token?: string;

    @Field(() => [SessionWhereInput], {nullable:true})
    AND?: Array<SessionWhereInput>;

    @Field(() => [SessionWhereInput], {nullable:true})
    OR?: Array<SessionWhereInput>;

    @Field(() => [SessionWhereInput], {nullable:true})
    NOT?: Array<SessionWhereInput>;

    @Field(() => DateTimeFilter, {nullable:true})
    expiresAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    device?: StringFilter;

    @Field(() => FloatFilter, {nullable:true})
    ipAddress?: FloatFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;
}
