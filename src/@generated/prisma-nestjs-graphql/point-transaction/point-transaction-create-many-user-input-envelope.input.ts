import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PointTransactionCreateManyUserInput } from './point-transaction-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class PointTransactionCreateManyUserInputEnvelope {

    @Field(() => [PointTransactionCreateManyUserInput], {nullable:false})
    @Type(() => PointTransactionCreateManyUserInput)
    data!: Array<PointTransactionCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
