import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { Int } from '@nestjs/graphql';
import {
  SessionWhereInput,
  SessionOrderByWithRelationInput,
  SessionWhereUniqueInput,
  SessionScalarFieldEnum,
} from 'src/@generated';

@InputType()
export class SessionFindManyArgs {
  // @Field(() => SessionSelect, { nullable: true })
  select?: Prisma.SessionSelect;

  @Field(() => SessionWhereInput, {nullable:true})
  @Type(() => SessionWhereInput)
  where?: InstanceType<typeof SessionWhereInput>;
  @Field(() => [SessionOrderByWithRelationInput], {nullable:true})
  orderBy?: Array<SessionOrderByWithRelationInput>;
  // @Field(() => SessionWhereUniqueInput, {nullable:true})
  // cursor?: Prisma.AtLeast<SessionWhereUniqueInput, 'id'>;
  @Field(() => Int, {nullable:true})
  take?: number;
  @Field(() => Int, {nullable:true})
  skip?: number;
  @Field(() => [SessionScalarFieldEnum], {nullable:true})
  distinct?: Array<keyof typeof SessionScalarFieldEnum>;
}
