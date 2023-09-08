import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { AccountWhereUniqueInput } from 'src/@generated';

@InputType()
export class AccountFindUniqueArgs {
  select?: Prisma.AccountSelect;

    @Field(() => AccountWhereUniqueInput, {nullable:false})
    @Type(() => AccountWhereUniqueInput)
    where!: Prisma.AtLeast<AccountWhereUniqueInput, 'id'>;
}
