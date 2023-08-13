import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { UserNotificationCreateInput } from 'src/@generated';
import { Prisma } from '@prisma/client';

@InputType()
export class UserNotificationCreateArgs {
  select?: Prisma.UserNotificationSelect;

  @Field(() => UserNotificationCreateInput, { nullable: false })
  @Type(() => UserNotificationCreateInput)
  data!: UserNotificationCreateInput;
  //TODO: terapkan Case sensitive @Transform(({name}) => name.toUpperCase())
  //maybe use field middleware
}
