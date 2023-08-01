import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CheckInCreateManyInput } from './check-in-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyCheckInArgs {

    @Field(() => [CheckInCreateManyInput], {nullable:false})
    @Type(() => CheckInCreateManyInput)
    data!: Array<CheckInCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
