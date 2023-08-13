import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { TransactionUpdateInput, TransactionWhereUniqueInput } from 'src/@generated';

@InputType()
export class TransactionUpdateOneArgs {

    select?: Prisma.TransactionSelect;

    @Field(() => TransactionUpdateInput, {nullable:false})
    @Type(() => TransactionUpdateInput)
    data!: InstanceType<typeof TransactionUpdateInput>;
    @Field(() => TransactionWhereUniqueInput, {nullable:false})
    @Type(() => TransactionWhereUniqueInput)
    where!: Prisma.AtLeast<TransactionWhereUniqueInput, 'id'>;
}
