import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { PointType } from '../prisma/point-type.enum';
import { TransactionType } from '../prisma/transaction-type.enum';
import { User } from '../user/user.model';

@ObjectType()
export class PointTransaction {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Float, {nullable:false})
    amount!: number;

    @Field(() => PointType, {nullable:false})
    pointType!: keyof typeof PointType;

    @Field(() => TransactionType, {nullable:false})
    transactionType!: keyof typeof TransactionType;

    @Field(() => Float, {nullable:false,defaultValue:0})
    currentBalance!: number;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => User, {nullable:false})
    User?: User;
}
