import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { Int } from '@nestjs/graphql';
import {
  UserNotificationWhereInput,
  UserNotificationOrderByWithRelationInput,
  UserNotificationWhereUniqueInput,
  UserNotificationScalarFieldEnum,
} from 'src/@generated';

@InputType()
export class UserNotificationFindManyArgs {
  // @Field(() => UserNotificationSelect, { nullable: true })
  select?: Prisma.UserNotificationSelect;

  @Field(() => UserNotificationWhereInput, {nullable:true})
  @Type(() => UserNotificationWhereInput)
  where?: InstanceType<typeof UserNotificationWhereInput>;
  @Field(() => [UserNotificationOrderByWithRelationInput], {nullable:true})
  orderBy?: Array<UserNotificationOrderByWithRelationInput>;
  // @Field(() => UserNotificationWhereUniqueInput, {nullable:true})
  // cursor?: Prisma.AtLeast<UserNotificationWhereUniqueInput, 'id'>;
  @Field(() => Int, {nullable:true})
  take?: number;
  @Field(() => Int, {nullable:true})
  skip?: number;
  @Field(() => [UserNotificationScalarFieldEnum], {nullable:true})
  distinct?: Array<keyof typeof UserNotificationScalarFieldEnum>;
}
