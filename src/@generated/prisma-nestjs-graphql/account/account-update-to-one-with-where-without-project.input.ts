import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountWhereInput } from './account-where.input';
import { Type } from 'class-transformer';
import { AccountUpdateWithoutProjectInput } from './account-update-without-project.input';

@InputType()
export class AccountUpdateToOneWithWhereWithoutProjectInput {

    @Field(() => AccountWhereInput, {nullable:true})
    @Type(() => AccountWhereInput)
    where?: AccountWhereInput;

    @Field(() => AccountUpdateWithoutProjectInput, {nullable:false})
    @Type(() => AccountUpdateWithoutProjectInput)
    data!: AccountUpdateWithoutProjectInput;
}
