import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { UserNotificationWhereUniqueInput } from 'src/@generated';

@InputType()
export class UserNotificationFindUniqueArgs {
  select?: Prisma.UserNotificationSelect;

    @Field(() => UserNotificationWhereUniqueInput, {nullable:false})
    @Type(() => UserNotificationWhereUniqueInput)
    where!: Prisma.AtLeast<UserNotificationWhereUniqueInput, 'id'>;
}
