import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountUpdateWithoutProjectInput } from './account-update-without-project.input';
import { Type } from 'class-transformer';
import { AccountCreateWithoutProjectInput } from './account-create-without-project.input';
import { AccountWhereInput } from './account-where.input';

@InputType()
export class AccountUpsertWithoutProjectInput {

    @Field(() => AccountUpdateWithoutProjectInput, {nullable:false})
    @Type(() => AccountUpdateWithoutProjectInput)
    update!: AccountUpdateWithoutProjectInput;

    @Field(() => AccountCreateWithoutProjectInput, {nullable:false})
    @Type(() => AccountCreateWithoutProjectInput)
    create!: AccountCreateWithoutProjectInput;

    @Field(() => AccountWhereInput, {nullable:true})
    @Type(() => AccountWhereInput)
    where?: AccountWhereInput;
}
