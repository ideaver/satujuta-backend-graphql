import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { Int } from '@nestjs/graphql';
import {
  AddressWhereInput,
  AddressOrderByWithRelationInput,
  AddressWhereUniqueInput,
  AddressScalarFieldEnum,
} from 'src/@generated';

@InputType()
export class AddressFindManyArgs {
  // @Field(() => AddressSelect, { nullable: true })
  select?: Prisma.AddressSelect;

  @Field(() => AddressWhereInput, { nullable: true })
  @Type(() => AddressWhereInput)
  where?: InstanceType<typeof AddressWhereInput>;
  @Field(() => [AddressOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<AddressOrderByWithRelationInput>;
  // @Field(() => AddressWhereUniqueInput, {nullable:true})
  // cursor?: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [AddressScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof AddressScalarFieldEnum>;
}
