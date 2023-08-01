import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class UserMinAggregateInput {

    @HideField()
    id?: true;

    @Field(() => Boolean, {nullable:true})
    firstName?: true;

    @Field(() => Boolean, {nullable:true})
    lastName?: true;

    @Field(() => Boolean, {nullable:true})
    email?: true;

    @HideField()
    addressId?: true;

    @Field(() => Boolean, {nullable:true})
    userRole?: true;

    @Field(() => Boolean, {nullable:true})
    userType?: true;

    @Field(() => Boolean, {nullable:true})
    avatarUrl?: true;

    @Field(() => Boolean, {nullable:true})
    whatsappNumber?: true;

    @HideField()
    whatsappVerifiedAt?: true;

    @Field(() => Boolean, {nullable:true})
    password?: true;

    @HideField()
    referredById?: true;

    @HideField()
    status?: true;

    @HideField()
    schoolId?: true;

    @HideField()
    createdAt?: true;

    @HideField()
    updatedAt?: true;

    @HideField()
    deletedAt?: true;

    @Field(() => Boolean, {nullable:true})
    theme?: true;
}
