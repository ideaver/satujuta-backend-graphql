import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { Int } from '@nestjs/graphql';
import {
  ProgramWhereInput,
  ProgramOrderByWithRelationInput,
  ProgramWhereUniqueInput,
  ProgramScalarFieldEnum,
} from 'src/@generated';

@InputType()
export class ProgramFindManyArgs {
  // @Field(() => ProgramSelect, { nullable: true })
  // select?: Prisma.ProgramSelect | null;

  // @Field(() => ProgramSelect, { nullable: true })
  // include?: ProgramSelect | null;

  @Field(() => ProgramWhereInput, { nullable: true })
  @Type(() => ProgramWhereInput)
  where?: ProgramWhereInput;

  @Field(() => [ProgramOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<ProgramOrderByWithRelationInput>;

  @Field(() => ProgramWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<
    ProgramWhereUniqueInput,
    'id' | 'email' | 'addressId' | 'whatsappNumber'
  >;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [ProgramScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof ProgramScalarFieldEnum>;
}
