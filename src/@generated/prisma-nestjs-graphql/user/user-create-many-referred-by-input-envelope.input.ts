import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateManyReferredByInput } from './user-create-many-referred-by.input';
import { Type } from 'class-transformer';

@InputType()
export class UserCreateManyReferredByInputEnvelope {

    @Field(() => [UserCreateManyReferredByInput], {nullable:false})
    @Type(() => UserCreateManyReferredByInput)
    data!: Array<UserCreateManyReferredByInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
