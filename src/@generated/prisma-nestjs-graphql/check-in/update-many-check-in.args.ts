import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CheckInUpdateManyMutationInput } from './check-in-update-many-mutation.input';
import { Type } from 'class-transformer';
import { CheckInWhereInput } from './check-in-where.input';

@ArgsType()
export class UpdateManyCheckInArgs {

    @Field(() => CheckInUpdateManyMutationInput, {nullable:false})
    @Type(() => CheckInUpdateManyMutationInput)
    data!: CheckInUpdateManyMutationInput;

    @Field(() => CheckInWhereInput, {nullable:true})
    @Type(() => CheckInWhereInput)
    where?: CheckInWhereInput;
}
