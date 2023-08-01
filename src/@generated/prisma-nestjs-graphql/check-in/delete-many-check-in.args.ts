import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CheckInWhereInput } from './check-in-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyCheckInArgs {

    @Field(() => CheckInWhereInput, {nullable:true})
    @Type(() => CheckInWhereInput)
    where?: CheckInWhereInput;
}
