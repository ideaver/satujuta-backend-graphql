import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateManySchoolInput } from './user-create-many-school.input';
import { Type } from 'class-transformer';

@InputType()
export class UserCreateManySchoolInputEnvelope {

    @Field(() => [UserCreateManySchoolInput], {nullable:false})
    @Type(() => UserCreateManySchoolInput)
    data!: Array<UserCreateManySchoolInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
