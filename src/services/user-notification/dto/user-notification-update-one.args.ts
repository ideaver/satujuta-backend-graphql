import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { UserNotificationUpdateInput, UserNotificationWhereUniqueInput } from 'src/@generated';

@InputType()
export class UserNotificationUpdateOneArgs {

    select?: Prisma.UserNotificationSelect;

    @Field(() => UserNotificationUpdateInput, {nullable:false})
    @Type(() => UserNotificationUpdateInput)
    data!: InstanceType<typeof UserNotificationUpdateInput>;
    @Field(() => UserNotificationWhereUniqueInput, {nullable:false})
    @Type(() => UserNotificationWhereUniqueInput)
    where!: Prisma.AtLeast<UserNotificationWhereUniqueInput, 'id'>;
}
