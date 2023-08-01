import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserNotificationWhereUniqueInput } from './user-notification-where-unique.input';
import { Type } from 'class-transformer';
import { UserNotificationUpdateWithoutUserInput } from './user-notification-update-without-user.input';

@InputType()
export class UserNotificationUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => UserNotificationWhereUniqueInput, {nullable:false})
    @Type(() => UserNotificationWhereUniqueInput)
    where!: Prisma.AtLeast<UserNotificationWhereUniqueInput, 'id'>;

    @Field(() => UserNotificationUpdateWithoutUserInput, {nullable:false})
    @Type(() => UserNotificationUpdateWithoutUserInput)
    data!: UserNotificationUpdateWithoutUserInput;
}
