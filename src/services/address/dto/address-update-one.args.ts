import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { AddressUpdateInput, AddressWhereUniqueInput } from 'src/@generated';

@InputType()
export class AddressUpdateOneArgs {

    select?: Prisma.AddressSelect;

    @Field(() => AddressUpdateInput, {nullable:false})
    @Type(() => AddressUpdateInput)
    data!: InstanceType<typeof AddressUpdateInput>;
    @Field(() => AddressWhereUniqueInput, {nullable:false})
    @Type(() => AddressWhereUniqueInput)
    where!: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;
}
