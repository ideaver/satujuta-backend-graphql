import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { Int } from '@nestjs/graphql';
import {
  FaqWhereInput,
  FaqOrderByWithRelationInput,
  FaqWhereUniqueInput,
  FaqScalarFieldEnum,
} from 'src/@generated';

@InputType()
export class FaqFindManyArgs {
  // @Field(() => FaqSelect, { nullable: true })
  select?: Prisma.FaqSelect;

  @Field(() => FaqWhereInput, {nullable:true})
  @Type(() => FaqWhereInput)
  where?: InstanceType<typeof FaqWhereInput>;
  @Field(() => [FaqOrderByWithRelationInput], {nullable:true})
  orderBy?: Array<FaqOrderByWithRelationInput>;
  // @Field(() => FaqWhereUniqueInput, {nullable:true})
  // cursor?: Prisma.AtLeast<FaqWhereUniqueInput, 'id'>;
  @Field(() => Int, {nullable:true})
  take?: number;
  @Field(() => Int, {nullable:true})
  skip?: number;
  @Field(() => [FaqScalarFieldEnum], {nullable:true})
  distinct?: Array<keyof typeof FaqScalarFieldEnum>;
}
