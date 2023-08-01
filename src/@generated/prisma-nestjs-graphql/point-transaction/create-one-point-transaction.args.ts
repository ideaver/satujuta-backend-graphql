import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PointTransactionCreateInput } from './point-transaction-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnePointTransactionArgs {

    @Field(() => PointTransactionCreateInput, {nullable:false})
    @Type(() => PointTransactionCreateInput)
    data!: PointTransactionCreateInput;
}
