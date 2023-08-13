import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { SessionUpdateInput, SessionWhereUniqueInput } from 'src/@generated';

@InputType()
export class SessionUpdateOneArgs {

    select?: Prisma.SessionSelect;

    @Field(() => SessionUpdateInput, {nullable:false})
    @Type(() => SessionUpdateInput)
    data!: InstanceType<typeof SessionUpdateInput>;
    @Field(() => SessionWhereUniqueInput, {nullable:false})
    @Type(() => SessionWhereUniqueInput)
    where!: Prisma.AtLeast<SessionWhereUniqueInput, 'id'>;
}
