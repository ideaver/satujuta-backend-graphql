import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { FileCreateInput } from 'src/@generated';
import { Prisma } from '@prisma/client';

@InputType()
export class FileCreateArgs {
  select?: Prisma.FileSelect;

  @Field(() => FileCreateInput, { nullable: false })
  @Type(() => FileCreateInput)
  data!: FileCreateInput;
  //TODO: terapkan Case sensitive @Transform(({name}) => name.toUpperCase())
  //maybe use field middleware
}
