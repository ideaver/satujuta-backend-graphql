import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { ProgramWhereUniqueInput } from 'src/@generated';

@InputType()
export class ProgramFindUniqueArgs {
  // @Field(() => ProgramSelect, { nullable: true })
  // select?: Prisma.ProgramSelect | null;

  // @Field(() => ProgramSelect, { nullable: true })
  // include?: ProgramSelect | null;

  @Field(() => ProgramWhereUniqueInput, { nullable: false })
  @Type(() => ProgramWhereUniqueInput)
  where!: Prisma.AtLeast<
    ProgramWhereUniqueInput,
    'id' | 'email' | 'addressId' | 'whatsappNumber'
  >;
}
