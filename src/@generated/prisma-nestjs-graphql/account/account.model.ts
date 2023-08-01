import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { AccountCategory } from '../prisma/account-category.enum';
import { User } from '../user/user.model';
import { Transaction } from '../transaction/transaction.model';
import { Project } from '../project/project.model';
import { Bank } from '../bank/bank.model';
import { AccountCount } from './account-count.output';

@ObjectType()
export class Account {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:true})
    accountNumber!: number | null;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Float, {nullable:false,defaultValue:0})
    balance!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => AccountCategory, {nullable:false})
    accountCategory!: keyof typeof AccountCategory;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => [Transaction], {nullable:true})
    transactions?: Array<Transaction>;

    @Field(() => Project, {nullable:true})
    project?: Project | null;

    @Field(() => Bank, {nullable:true})
    bankAccount?: Bank | null;

    @Field(() => AccountCount, {nullable:false})
    _count?: AccountCount;
}
