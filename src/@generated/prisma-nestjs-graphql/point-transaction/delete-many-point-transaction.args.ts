import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PointTransactionWhereInput } from './point-transaction-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyPointTransactionArgs {

    @Field(() => PointTransactionWhereInput, {nullable:true})
    @Type(() => PointTransactionWhereInput)
    where?: PointTransactionWhereInput;
}
