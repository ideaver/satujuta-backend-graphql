import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { AccountUpdateInput, AccountWhereUniqueInput } from 'src/@generated';

@InputType()
export class AccountUpdateOneArgs {

    select?: Prisma.AccountSelect;

    @Field(() => AccountUpdateInput, {nullable:false})
    @Type(() => AccountUpdateInput)
    data!: InstanceType<typeof AccountUpdateInput>;
    @Field(() => AccountWhereUniqueInput, {nullable:false})
    @Type(() => AccountWhereUniqueInput)
    where!: Prisma.AtLeast<AccountWhereUniqueInput, 'id'>;
}
