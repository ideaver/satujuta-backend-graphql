import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { Int } from '@nestjs/graphql';
import {
  CheckInWhereInput,
  CheckInOrderByWithRelationInput,
  CheckInWhereUniqueInput,
  CheckInScalarFieldEnum,
} from 'src/@generated';

@InputType()
export class CheckInFindManyArgs {
  // @Field(() => CheckInSelect, { nullable: true })
  select?: Prisma.CheckInSelect;

  @Field(() => CheckInWhereInput, {nullable:true})
  @Type(() => CheckInWhereInput)
  where?: InstanceType<typeof CheckInWhereInput>;
  @Field(() => [CheckInOrderByWithRelationInput], {nullable:true})
  orderBy?: Array<CheckInOrderByWithRelationInput>;
  // @Field(() => CheckInWhereUniqueInput, {nullable:true})
  // cursor?: Prisma.AtLeast<CheckInWhereUniqueInput, 'id'>;
  @Field(() => Int, {nullable:true})
  take?: number;
  @Field(() => Int, {nullable:true})
  skip?: number;
  @Field(() => [CheckInScalarFieldEnum], {nullable:true})
  distinct?: Array<keyof typeof CheckInScalarFieldEnum>;
}
