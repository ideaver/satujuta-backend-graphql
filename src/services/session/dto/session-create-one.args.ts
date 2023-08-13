import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { SessionCreateInput } from 'src/@generated';
import { Prisma } from '@prisma/client';

@InputType()
export class SessionCreateArgs {
  select?: Prisma.SessionSelect;

  @Field(() => SessionCreateInput, { nullable: false })
  @Type(() => SessionCreateInput)
  data!: SessionCreateInput;
  //TODO: terapkan Case sensitive @Transform(({name}) => name.toUpperCase())
  //maybe use field middleware
}
