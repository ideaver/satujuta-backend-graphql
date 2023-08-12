import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ProgramUpdateInput, ProgramWhereUniqueInput } from 'src/@generated';

@InputType()
export class ProgramUpdateOneArgs {
  // @Field(() => ProgramSelect, { nullable: true })
  // select?: Prisma.ProgramSelect | null;

  // @Field(() => ProgramSelect, { nullable: true })
  // include?: ProgramSelect | null;

  @Field(() => ProgramUpdateInput, { nullable: false })
  @Type(() => ProgramUpdateInput)
  data!: ProgramUpdateInput;

  @Field(() => ProgramWhereUniqueInput, { nullable: false })
  @Type(() => ProgramWhereUniqueInput)
  where!: Prisma.AtLeast<
    ProgramWhereUniqueInput,
    'id' | 'email' | 'addressId' | 'whatsappNumber'
  >;
}
