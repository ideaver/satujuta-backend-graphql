import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountCreateManyUserInput } from './account-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class AccountCreateManyUserInputEnvelope {

    @Field(() => [AccountCreateManyUserInput], {nullable:false})
    @Type(() => AccountCreateManyUserInput)
    data!: Array<AccountCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
