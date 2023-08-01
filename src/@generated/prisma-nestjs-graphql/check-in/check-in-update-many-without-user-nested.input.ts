import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CheckInCreateWithoutUserInput } from './check-in-create-without-user.input';
import { Type } from 'class-transformer';
import { CheckInCreateOrConnectWithoutUserInput } from './check-in-create-or-connect-without-user.input';
import { CheckInUpsertWithWhereUniqueWithoutUserInput } from './check-in-upsert-with-where-unique-without-user.input';
import { CheckInCreateManyUserInputEnvelope } from './check-in-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CheckInWhereUniqueInput } from './check-in-where-unique.input';
import { CheckInUpdateWithWhereUniqueWithoutUserInput } from './check-in-update-with-where-unique-without-user.input';
import { CheckInUpdateManyWithWhereWithoutUserInput } from './check-in-update-many-with-where-without-user.input';
import { CheckInScalarWhereInput } from './check-in-scalar-where.input';

@InputType()
export class CheckInUpdateManyWithoutUserNestedInput {

    @Field(() => [CheckInCreateWithoutUserInput], {nullable:true})
    @Type(() => CheckInCreateWithoutUserInput)
    create?: Array<CheckInCreateWithoutUserInput>;

    @Field(() => [CheckInCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => CheckInCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<CheckInCreateOrConnectWithoutUserInput>;

    @Field(() => [CheckInUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => CheckInUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<CheckInUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => CheckInCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => CheckInCreateManyUserInputEnvelope)
    createMany?: CheckInCreateManyUserInputEnvelope;

    @Field(() => [CheckInWhereUniqueInput], {nullable:true})
    @Type(() => CheckInWhereUniqueInput)
    set?: Array<Prisma.AtLeast<CheckInWhereUniqueInput, 'id'>>;

    @Field(() => [CheckInWhereUniqueInput], {nullable:true})
    @Type(() => CheckInWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<CheckInWhereUniqueInput, 'id'>>;

    @Field(() => [CheckInWhereUniqueInput], {nullable:true})
    @Type(() => CheckInWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<CheckInWhereUniqueInput, 'id'>>;

    @Field(() => [CheckInWhereUniqueInput], {nullable:true})
    @Type(() => CheckInWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CheckInWhereUniqueInput, 'id'>>;

    @Field(() => [CheckInUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => CheckInUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<CheckInUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [CheckInUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => CheckInUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<CheckInUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [CheckInScalarWhereInput], {nullable:true})
    @Type(() => CheckInScalarWhereInput)
    deleteMany?: Array<CheckInScalarWhereInput>;
}
