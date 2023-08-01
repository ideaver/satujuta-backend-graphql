import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CheckInWhereInput } from './check-in-where.input';
import { Type } from 'class-transformer';
import { CheckInOrderByWithRelationInput } from './check-in-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { CheckInWhereUniqueInput } from './check-in-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CheckInScalarFieldEnum } from './check-in-scalar-field.enum';

@ArgsType()
export class FindFirstCheckInOrThrowArgs {

    @Field(() => CheckInWhereInput, {nullable:true})
    @Type(() => CheckInWhereInput)
    where?: CheckInWhereInput;

    @Field(() => [CheckInOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CheckInOrderByWithRelationInput>;

    @Field(() => CheckInWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CheckInWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [CheckInScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CheckInScalarFieldEnum>;
}
