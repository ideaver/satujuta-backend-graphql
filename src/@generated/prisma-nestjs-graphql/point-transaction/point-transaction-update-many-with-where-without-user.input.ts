import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PointTransactionScalarWhereInput } from './point-transaction-scalar-where.input';
import { Type } from 'class-transformer';
import { PointTransactionUpdateManyMutationInput } from './point-transaction-update-many-mutation.input';

@InputType()
export class PointTransactionUpdateManyWithWhereWithoutUserInput {

    @Field(() => PointTransactionScalarWhereInput, {nullable:false})
    @Type(() => PointTransactionScalarWhereInput)
    where!: PointTransactionScalarWhereInput;

    @Field(() => PointTransactionUpdateManyMutationInput, {nullable:false})
    @Type(() => PointTransactionUpdateManyMutationInput)
    data!: PointTransactionUpdateManyMutationInput;
}
