import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CheckInCreateManyUserInput } from './check-in-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class CheckInCreateManyUserInputEnvelope {

    @Field(() => [CheckInCreateManyUserInput], {nullable:false})
    @Type(() => CheckInCreateManyUserInput)
    data!: Array<CheckInCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
