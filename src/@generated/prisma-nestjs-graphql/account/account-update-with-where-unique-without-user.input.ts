import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AccountWhereUniqueInput } from './account-where-unique.input';
import { Type } from 'class-transformer';
import { AccountUpdateWithoutUserInput } from './account-update-without-user.input';

@InputType()
export class AccountUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => AccountWhereUniqueInput, {nullable:false})
    @Type(() => AccountWhereUniqueInput)
    where!: Prisma.AtLeast<AccountWhereUniqueInput, 'id'>;

    @Field(() => AccountUpdateWithoutUserInput, {nullable:false})
    @Type(() => AccountUpdateWithoutUserInput)
    data!: AccountUpdateWithoutUserInput;
}
