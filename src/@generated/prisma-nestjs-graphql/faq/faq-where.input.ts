import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class FaqWhereInput {

    @Field(() => [FaqWhereInput], {nullable:true})
    AND?: Array<FaqWhereInput>;

    @Field(() => [FaqWhereInput], {nullable:true})
    OR?: Array<FaqWhereInput>;

    @Field(() => [FaqWhereInput], {nullable:true})
    NOT?: Array<FaqWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
