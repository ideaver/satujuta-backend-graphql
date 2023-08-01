import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PointTransactionCreateManyInput } from './point-transaction-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyPointTransactionArgs {

    @Field(() => [PointTransactionCreateManyInput], {nullable:false})
    @Type(() => PointTransactionCreateManyInput)
    data!: Array<PointTransactionCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
