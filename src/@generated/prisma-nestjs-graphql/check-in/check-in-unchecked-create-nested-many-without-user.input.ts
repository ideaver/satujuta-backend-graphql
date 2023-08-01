import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CheckInCreateWithoutUserInput } from './check-in-create-without-user.input';
import { Type } from 'class-transformer';
import { CheckInCreateOrConnectWithoutUserInput } from './check-in-create-or-connect-without-user.input';
import { CheckInCreateManyUserInputEnvelope } from './check-in-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CheckInWhereUniqueInput } from './check-in-where-unique.input';

@InputType()
export class CheckInUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [CheckInCreateWithoutUserInput], {nullable:true})
    @Type(() => CheckInCreateWithoutUserInput)
    create?: Array<CheckInCreateWithoutUserInput>;

    @Field(() => [CheckInCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => CheckInCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<CheckInCreateOrConnectWithoutUserInput>;

    @Field(() => CheckInCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => CheckInCreateManyUserInputEnvelope)
    createMany?: CheckInCreateManyUserInputEnvelope;

    @Field(() => [CheckInWhereUniqueInput], {nullable:true})
    @Type(() => CheckInWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CheckInWhereUniqueInput, 'id'>>;
}
