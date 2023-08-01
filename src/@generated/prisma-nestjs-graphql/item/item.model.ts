import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserRole } from '../prisma/user-role.enum';
import { Order } from '../order/order.model';

@ObjectType()
export class Item {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Float, {nullable:false})
    price!: number;

    @Field(() => Int, {nullable:false})
    qty!: number;

    @Field(() => UserRole, {nullable:false})
    userRole!: keyof typeof UserRole;

    @Field(() => Int, {nullable:false})
    orderId!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Order, {nullable:false})
    order?: Order;
}
