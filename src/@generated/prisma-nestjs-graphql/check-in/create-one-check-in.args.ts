import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CheckInCreateInput } from './check-in-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneCheckInArgs {

    @Field(() => CheckInCreateInput, {nullable:false})
    @Type(() => CheckInCreateInput)
    data!: CheckInCreateInput;
}
