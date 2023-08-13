import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { FaqUpdateInput, FaqWhereUniqueInput } from 'src/@generated';

@InputType()
export class FaqUpdateOneArgs {

    select?: Prisma.FaqSelect;

    @Field(() => FaqUpdateInput, {nullable:false})
    @Type(() => FaqUpdateInput)
    data!: InstanceType<typeof FaqUpdateInput>;
    @Field(() => FaqWhereUniqueInput, {nullable:false})
    @Type(() => FaqWhereUniqueInput)
    where!: Prisma.AtLeast<FaqWhereUniqueInput, 'id'>;
}
