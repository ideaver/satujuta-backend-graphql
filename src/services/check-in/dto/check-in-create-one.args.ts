import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { CheckInCreateInput } from 'src/@generated';
import { Prisma } from '@prisma/client';

@InputType()
export class CheckInCreateArgs {
  select?: Prisma.CheckInSelect;

  @Field(() => CheckInCreateInput, { nullable: false })
  @Type(() => CheckInCreateInput)
  data!: CheckInCreateInput;
  //TODO: terapkan Case sensitive @Transform(({name}) => name.toUpperCase())
  //maybe use field middleware
}
