import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ProgramUpdateInput, ProgramWhereUniqueInput } from 'src/@generated';

@InputType()
export class ProgramUpdateOneArgs {

    select?: Prisma.ProgramSelect;

    @Field(() => ProgramUpdateInput, {nullable:false})
    @Type(() => ProgramUpdateInput)
    data!: InstanceType<typeof ProgramUpdateInput>;
    @Field(() => ProgramWhereUniqueInput, {nullable:false})
    @Type(() => ProgramWhereUniqueInput)
    where!: Prisma.AtLeast<ProgramWhereUniqueInput, 'id'>;
}
