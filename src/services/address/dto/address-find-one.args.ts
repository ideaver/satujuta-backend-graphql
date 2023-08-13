import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { AddressWhereUniqueInput } from 'src/@generated';

@InputType()
export class AddressFindUniqueArgs {
  select?: Prisma.AddressSelect;

    @Field(() => AddressWhereUniqueInput, {nullable:false})
    @Type(() => AddressWhereUniqueInput)
    where!: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;
}
