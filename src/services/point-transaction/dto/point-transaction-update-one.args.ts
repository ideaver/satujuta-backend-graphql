import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { PointTransactionUpdateInput, PointTransactionWhereUniqueInput } from 'src/@generated';

@InputType()
export class PointTransactionUpdateOneArgs {

    select?: Prisma.PointTransactionSelect;

    @Field(() => PointTransactionUpdateInput, {nullable:false})
    @Type(() => PointTransactionUpdateInput)
    data!: InstanceType<typeof PointTransactionUpdateInput>;
    @Field(() => PointTransactionWhereUniqueInput, {nullable:false})
    @Type(() => PointTransactionWhereUniqueInput)
    where!: Prisma.AtLeast<PointTransactionWhereUniqueInput, 'id'>;
}
