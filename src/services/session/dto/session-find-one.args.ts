import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { SessionWhereUniqueInput } from 'src/@generated';

@InputType()
export class SessionFindUniqueArgs {
  select?: Prisma.SessionSelect;

    @Field(() => SessionWhereUniqueInput, {nullable:false})
    @Type(() => SessionWhereUniqueInput)
    where!: Prisma.AtLeast<SessionWhereUniqueInput, 'id'>;
}
