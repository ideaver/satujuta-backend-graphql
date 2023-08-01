import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PointTransactionUpdateManyMutationInput } from './point-transaction-update-many-mutation.input';
import { Type } from 'class-transformer';
import { PointTransactionWhereInput } from './point-transaction-where.input';

@ArgsType()
export class UpdateManyPointTransactionArgs {

    @Field(() => PointTransactionUpdateManyMutationInput, {nullable:false})
    @Type(() => PointTransactionUpdateManyMutationInput)
    data!: PointTransactionUpdateManyMutationInput;

    @Field(() => PointTransactionWhereInput, {nullable:true})
    @Type(() => PointTransactionWhereInput)
    where?: PointTransactionWhereInput;
}
