import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { FaqWhereUniqueInput } from 'src/@generated';

@InputType()
export class FaqFindUniqueArgs {
  select?: Prisma.FaqSelect;

    @Field(() => FaqWhereUniqueInput, {nullable:false})
    @Type(() => FaqWhereUniqueInput)
    where!: Prisma.AtLeast<FaqWhereUniqueInput, 'id'>;
}
