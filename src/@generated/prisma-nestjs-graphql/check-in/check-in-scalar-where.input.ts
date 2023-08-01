import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class CheckInScalarWhereInput {

    @Field(() => [CheckInScalarWhereInput], {nullable:true})
    AND?: Array<CheckInScalarWhereInput>;

    @Field(() => [CheckInScalarWhereInput], {nullable:true})
    OR?: Array<CheckInScalarWhereInput>;

    @Field(() => [CheckInScalarWhereInput], {nullable:true})
    NOT?: Array<CheckInScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    hotelId?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    checkInAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
